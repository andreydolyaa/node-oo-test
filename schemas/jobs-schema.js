import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
  title: String,
});

export const Jobs = mongoose.model("Jobs", jobsSchema);
