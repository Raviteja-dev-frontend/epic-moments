import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }
}, { timestamps: true });

export const manageCategory = mongoose.model("Category", categorySchema);
