import mongoose from "mongoose";

export const connectDB = async (URI) => {
  mongoose.connect(URI);
};
