import {catchAsyncError} from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/jwtToken.js";


// import cloudinary from "cloudinary";

export const patientRegister = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, UHID, dob, gender, password } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !UHID ||
    !dob ||
    !gender ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler("User already Registered!", 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    UHID,
    dob,
    gender,
    password,
    role: "Patient",
  });
  generateToken(user, "User Registered!", 200, res);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;
  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  if (password !== confirmPassword) {
    return next(
      new ErrorHandler("Password & Confirm Password Do Not Match!", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }
  if (role !== user.role) {
    return next(new ErrorHandler(`User Not Found With This Role!`, 400));
  }
  generateToken(user, "Login Successfully!", 201, res);
});

export const addNewAdmin = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, UHID, dob, gender, password } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !UHID ||
    !dob ||
    !gender ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler(`${isRegistered.role} With This Email Already Exists!`, 400));
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    UHID,
    dob,
    gender,
    password,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "New Admin Registered",
    admin,
  });
});

export const getAllDoctors = catchAsyncError(async (req, res, next) => {
  const doctors = await User.find({ role: "Doctor" });
  res.status(200).json({
    success: true,
    doctors,
  });
});

// {
//   "firstName":"Neelansh",
//   "lastName":"Agrawal",
//   "email":"Patient@gmail.com",
//   "phone":"1234567890",
//   "UHID":"12345678901234",
//   "dob":"2002-07-16",
//   "gender":"Male",
//   "password":"12345678",
//   "role":"Patient"
// }


// {
//   "email":"Patient@gmail.com",
//   "password":"12345678",
//   "confirmPassword":"12345678",
//   "role":"Patient"
// }