import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
     console.log("JWT_SECRET:", process.env.JWT_SECRET);
    console.log("Required cookie", req.cookies);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
