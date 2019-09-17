const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const user = require('../models/User');

users.use(cors())
process.env.SECRET_KEY = "secret"

users.post("/register", (req,res) => {
    const today = new Date();
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        user_name : req.body.user_name,
        password : req.body.password,
        createdAt : today,
    }
    user.findOne({
        user_name: req.body.user_name
    }).then(user => {
        if(!user){
            bcrypt.hash(req.body.password , 10, (err , hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status:user.user_name + "registerd"})
                }).catch( err => {
                    res.send("error" + err)
                })
            })
        }else{
            res.json({errror :"user already Exist"})
        }
    }).catch(err => {
        res.send("error" + err)
    })
})

users.post('/login' , (req,res) => {
    User.findOne({
        user_name:req.body.user_name
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload ={
                    _id:user._id,
                    first_name:user.first_name,
                    last_name:user.last_name,
                    user_name:user.user_name
                }
                let token =jwt.sign(payload , process.env.SECRET_KEY, {
                    expiresIn:1440
                })
                res.json({token:token})
            }else{
                res.json({errror:"user does not exist"})
            }
        }else{
            res.json({error:"User does not exist"})
        }
    })
    .catch(err => {
        res.send('error:'+err)
    })
})

module.exports = users;