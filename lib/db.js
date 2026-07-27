import mongoose from "mongoose";

const connectDB = async () => {
  console.log("MONGO_URI:", process.env.MONGO_URI);

  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;