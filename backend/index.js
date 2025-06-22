const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Allow only Vercel frontend
const allowedOrigins = ["https://my-vpn-server.vercel.app"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // optional: only needed if you're sending cookies
  })
);

app.use(express.json());

const authRoutes = require("./routes/auth.js");
const vpnAccessRoutes = require("./routes/vpn-access");

app.use("/api", vpnAccessRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
