const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded("extends: false"))
app.use(function (req , res , next) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET , POST , OPTIONS, PUT , PATCH , DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-with, content-type');
    res.setHeader('Access-Control-Allow-Credential',true);
    next();
  });
const mongoUri = 'mongodb://localhost:27017/HotelBooking';

mongoose.connect(mongoUri , {useNewUrlParser:true} )
.then(() => console.log("mongodb Connected"))
.catch(() => console.log(err));

var Users = require("./routes/Users");
var Hotels = require("./routes/Hotels");
var Rooms = require("./routes/Rooms");
app.use("/users", Users);
app.use("/hotels", Hotels);
app.use("/rooms", Rooms);

app.listen(port , function() {
    console.log("Server is Running :" + port);
})