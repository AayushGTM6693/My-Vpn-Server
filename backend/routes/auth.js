const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../prismaclient");
const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log("✅ SIGNUP route hit");
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });
    res.json({ message: "user is created" });
  } catch (error) {
    res.status(400).json("user has been already created");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ error: "Invalid email" });
  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(400).json({ error: "invalid password" });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({ token });
});

module.exports = router;
