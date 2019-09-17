const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autopopulate = require('mongoose-autopopulate');
const roomSchema = new Schema ({
    room_name : {
        type: String,
    },
    vender: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    },
    address : {
        type: String,
    },
    images : [],
    category : {
        type: String,
    },
    facilieties:{
        type: String,
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    status:{
        type: Boolean,
        default: false
    }
})
roomSchema.plugin(autopopulate);
module.exports = Room = mongoose.model("rooms" , roomSchema)