// import {Message} from '../models/messageSchema.js';

// export const sendMessage = async (req,res,next) =>{
//   const {firstName,lastName,email,phone,message} = req.body;
//   if(!firstName || !lastName || !email || !phone || !message){
//     return res.status(400).json({
//       success:true,
//       message:"Please full fill form",
//     });
//   };

//   await Message.create({firstName,lastName,email,phone,message});
//   res.status(200).json({
//     success:true,
//     message:"Message Sent Successfully",
//   });
// };

import { Message } from '../models/messageSchema.js';

export const sendMessage = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields",
    });
  }

  try {
    await Message.create({ firstName, lastName, email, phone, message });
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    next(error); // Pass error to the next middleware (typically error handler)
  }
};
