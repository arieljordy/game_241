const app = require("express")();
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const { createTokenLiveKit } = require("./config/livekit-config");
const routesVisitor = require("./routes/rt-visitor");
require("./config/db")();

app.use(
  cors({
    origin: ["*", process.env.DOMAIN_FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-with",
      "Content",
      "Accept",
      "Content-Type",
      "Authorization",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes de base
app.get("/", (req, res) => {
  res.send("Backend for MERN Video Chat");
});
app.get("/getToken", async (req, res) => {
  // res.send(
  const data = await createTokenLiveKit();
  res.status(200).json(data);
  // );
});
app.use("/api/visiteur", routesVisitor);

module.exports = app;
