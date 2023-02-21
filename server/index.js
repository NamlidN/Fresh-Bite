import "./config/config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./db/connect.js";

const PORT = process.env.PORT;

const app = express();

// middlware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// POST - REGISTER
app.use("/api/v1/auth", authRouter);
// POST - LOGIN
app.use("/api/v1/auth", authRouter);

// GET/POST für PRODUCTS
app.use("/api/v1/products", productRouter);

// test route
app.get("/", async (req, res) => {
  res.send("Hello from the Server!");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log("Server ist listening on PORT:", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
