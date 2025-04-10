//defining our schema
const mongoose = require("mongoose");
const PassportLocalMongoose = require('passport-local-mongoose');
const signupSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        //required:true,
        //unique:true
    },
    email: {
        type: String,
        trim: true,
        //required:true,
    },
    role: {
        type: String,
        trim: true,
        //required:true,
    }
})
//for email
signupSchema.plugin(PassportLocalMongoose, {
    usernameField: "email",
})
module.exports = mongoose.model("Signup", signupSchema);