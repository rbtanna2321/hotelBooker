const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    first_name : {
        type: String,
    },
    last_name : {
        type: String,
    },
    user_name : {
        type: String,
    },
    password : {
        type: String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})
module.exports = User = mongoose.model("users" , userSchema)