require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

/* 🔥🔥🔥 VERY IMPORTANT FOR RENDER + SECURE COOKIES 🔥🔥🔥 */
app.set("trust proxy", 1);

/* ---------- MIDDLEWARES ---------- */
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "https://zerodhaclone-frontend-jwnb.onrender.com",
      "https://zerodhaclone-dashboard-o5hg.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* ---------- AUTH ROUTES ---------- */
app.use("/", authRoute);

/* ---------- PROTECTED ROUTES ---------- */
app.get("/allHoldings", userVerification, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.status(200).json(allHoldings);
});

app.get("/allPositions", userVerification, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.status(200).json(allPositions);
});

app.get("/allOrders", userVerification, async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.status(200).json(allOrders);
});

app.post("/newOrder", userVerification, async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.status(201).json({ message: "Order Saved" });
});

/* ---------- SERVER START ---------- */
app.listen(PORT, async () => {
  console.log(`✅ Server running on port ${PORT}`);
  await mongoose.connect(uri);
  console.log("✅ MongoDB connected");
});
