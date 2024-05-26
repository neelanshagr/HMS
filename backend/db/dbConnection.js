import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL ,
    )
    .then(() => {
      console.log("Connected to database.");
      //console.log(process.env.MONGO_URL);
    })
    .catch((err) => {
      console.log(`Some Error occurred. ${err}`);
    });
};


// import mongoose from 'mongoose';

// export const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Database connected successfully');
//   } catch (error) {
//     console.error('Database connection failed:', error);
//     process.exit(1); // Exit process with failure
//   }
// };
