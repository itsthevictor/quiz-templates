import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import "express-async-errors";

import { connectDB } from "./db/connectDB.js";
import { pollRouter } from "./routes/pollRoutes.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/polls", pollRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, (error) =>
      console.log(`server is listening on port ${PORT} ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
