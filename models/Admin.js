//defining our schema
const mongoose = require("mongoose");
const PassportLocalMongoose = require('passport-local-mongoose');
const adminSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        //required:true,
        //unique:true
    },
    lname: {
        type: String,
        trim: true,
        //required:true,
    },
    email: {
        type: String,
        trim: true,
        //required:true,
    },
    password: {
        type: String,
        trim: true,
        //required:true,
    }
})
//for email
adminSchema.plugin(PassportLocalMongoose, {
    usernameField: "email",
})
module.exports = mongoose.model("Admin", adminSchema);