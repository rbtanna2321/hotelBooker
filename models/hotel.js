const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autopopulate = require('mongoose-autopopulate');
const hotelSchema = new Schema ({
    hotel_name : {
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
hotelSchema.plugin(autopopulate);
module.exports = Hotel = mongoose.model("hotels" , hotelSchema)