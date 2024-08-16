import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain at least 3 characters!"]
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain at least 3 characters!"]
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email!"]
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain exactly 10 digits!"],
    maxLength: [10, "Phone number must contain exactly 10 digits!"]
  },
  UHID: {
    type: String,
    required: true,
    minLength: [14, "UHID must contain exactly 14 digits!"],
    maxLength: [14, "UHID must contain exactly 14 digits!"]
  },
  dob:{
    type:Date,
    required:[true, "DOB is required!"]
  },
  gender:{
    type:String,
    required:true,
    enum:["Male" , "Female"],
  },
  password:{
    type:String,
    required:true,
    minLength:[8,"password must contain at least 8 characters"],
    select:false,
  },
  role:{
    type:String,
    required:true,
    enum:["Admin","Patient","Doctor"],
  },
  doctorDepartment:{
    type:String
  },
  docAvatar:{
    public_id:String,
    url:String,
  },
});

userSchema.pre("save",async function (next) {
  if(!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Comparing Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating a JWT token for authorization
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
