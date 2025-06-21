const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth.js");
const vpnAccessRoutes = require("./routes/vpn-access");
app.use("/api", vpnAccessRoutes);

app.use("/api/auth", authRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
