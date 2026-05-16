const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {

  const { email, password } = req.body;

  const user = new User({
    email,
    password
  });

  await user.save();

  res.json({
    message: "User Registered"
  });

});

app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password
  });

  if(user){
    res.json({
      message: "Login Success"
    });
  }
  else{
    res.json({
      message: "Invalid Credentials"
    });
  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});