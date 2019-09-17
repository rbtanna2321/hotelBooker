const express = require("express");
const hotels = express.Router();
const cors = require("cors");
const Hotel = require('../models/hotel');

hotels.use(cors())
process.env.SECRET_KEY = "secret"
const venderId = [];
           
hotels.post("/hotel/add", (req,res) => {
    console.log("data",req)
    const today = new Date();
    const hotelData = {
        hotel_name : req.body.hotel_name,
        facilieties : req.body.facilieties,
        address : req.body.address,
        images : req.body.images,
        vender: req.body.vender,
        createdAt : today,
    }
  
                Hotel.create(hotelData)
                .then(hotels => {
                    res.json({status:hotels+ "Add Hotel"})
                }).catch( err => {
                    res.send("error" + err)
                })
            })
            hotels.post('/hotel', function (req , res) {
              var option = {
                status:false,
                vender: req.body.id
              }
                Hotel.find( {vender: req.body.id},function (err , data) {
                  if(err){
                    res.send(err)
                  }else{         
                    res.send(data)
                  }
                })
              });
              hotels.get('/hotel', function (req , res) {
                  Hotel.find( {},function (err , data) {
                    if(err){
                      res.send(err)
                    }else{         
                      res.send(data)
                    }
                  })
                });
module.exports = hotels;