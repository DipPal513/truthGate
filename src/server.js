const express = require("express");
const { default: mongoose } = require("mongoose");
const user = require("./routes/user")
const app = express();

mongoose.connect("http://localhost:27017").then(()=> console.log("connection success")).catch(error => console.log(error));

app.use("/",user)