import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
const server = express();

server.use(bodyParser.json({ limit: "32mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
server.use(cors());

server.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

const pwd = "usermanagement";
const MONGO_URI = `mongodb+srv://chanaka7518:${pwd}@cluster0.ntppbya.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    server.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("Connection to mongoDB faild", error.message);
  }
};

connectDB();

mongoose.connection.on("open", () => {
  console.log("Connection to database has been established");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
