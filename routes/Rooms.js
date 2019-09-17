const express = require("express");
const rooms = express.Router();
const cors = require("cors");
// const Hotel = require('../models/hotel');
const Room = require('../models/room');

rooms.use(cors())
process.env.SECRET_KEY = "secret"
const venderId = [];
           
rooms.post("/room/add", (req,res) => {
    console.log("data",req)
    const today = new Date();
    const roomData = {
        room_name : req.body.room_name,
        facilieties : req.body.facilieties,
        address : req.body.address,
        images : req.body.images,
        vender: req.body.vender,
        createdAt : today,
    }
  
                Room.create(roomData)
                .then(rooms => {
                    res.json({status:rooms+ "Add Room"})
                }).catch( err => {
                    res.send("error" + err)
                })
            })
            // Get Vender Rooms Record
            rooms.post('/room', function (req , res) {
              var option = {
                status:false,
                vender: req.body.id
              }
                Room.find( {vender: req.body.id},function (err , data) {
                  if(err){
                    res.send(err)
                  }else{         
                    res.send(data)
                  }
                })
              });
            // Get Vender hotel Record
            // hotels.post('/hotel', function (req , res) {
            //   var option = {
            //     status:false,
            //     vender: req.body.id
            //   }
            //     Hotel.find( {vender: req.body.id},function (err , data) {
            //       if(err){
            //         res.send(err)
            //       }else{         
            //         res.send(data)
            //       }
            //     })
            //   });
module.exports = rooms;