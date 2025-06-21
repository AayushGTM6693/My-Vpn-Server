const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/auth.js");

router.get("/vpn-access", authenticateToken, (req, res) => {
  // jwt valid vhaye matra gayo

  res.json({
    socks5: {
      host: "165.22.110.253",
      port: 1080,
    },
  });
});

module.exports = router;
