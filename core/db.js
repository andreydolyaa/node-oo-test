import mongoose from "mongoose";
import env from "./env.js";

const CONNECTION_STRING = `${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;

export const connectToDb = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("DB Connected");
  } catch (error) {
    throw new Error(error);
  }
};
