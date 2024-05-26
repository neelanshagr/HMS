// import mongoose from "mongoose";
// import validator from "validator";

// const messageSchema = new mongoose.Schema({

//   firstName: {
//     type: String,
//     required: true,
//     minLength: [3,"first Name must Contain at least 3 Characters!"]
//   },

//   lastName: {
//     type: String,
//     required: true,
//     minLength: [3,"last Name must Contain at least 3 Characters!"]
//   },

//   email: {
//     type: String,
//     required: true,
//     validate: [validator.isEmail,"Please provide a valid email!"]
//   },

//   phone: {
//     type: String,
//     required: true,
//     minLength: [10,"Phone No. must Contain exactly 11 digits!"],
//     maxLength: [10,"Phone No. must Contain exactly 11 digits!"]
//   },

//   message: {
//     type: String,
//     required: true,
//     minLength: [10,"message must Contain at least 10 Characters!"]
//   },
// });

// export const Message = mongoose.model("Message", messageSchema);

import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must contain at least 10 characters!"]
  }
});

export const Message = mongoose.model("Message", messageSchema);
