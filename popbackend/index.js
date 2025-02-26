const express = require("express");
const app = express();
const mdb = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcrypt");
const Signup = require("./models/signupSchema");
const cors=require('cors');
app.use(express.json());
app.use(cors());
app.get("/login", (req, res) => {
  res.sendFile(
    "C:\\Users\\nandi\\OneDrive\\Desktop\\merntrain\\Html with styling\\index.html"
  );
});
const port = 3002;
mdb
  .connect(
    "mongodb+srv://nandikamaheshwar6:3Br1q4Bx0ebpDtdX@popbackend.oltm4.mongodb.net/test"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "signup successful", isSignUp: true });
  } catch (err) {
    console.log(err);
    res.status(201).json({ message: "Signup unsuccessful", isSignUp: false });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "Login successful" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: " error" });
  }
});
app.listen(port, () => console.log("Server is listening to:", port));

