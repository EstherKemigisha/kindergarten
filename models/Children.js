// //defining our schema
// const mongoose = require("mongoose");

// const childrenSchema = new mongoose.Schema({
//     fname:{
//         type:String,
//         trim:true,
//         // required:true,
//         //unique:true
//     },
//     lname:{
//         type:String,
//         trim:true,
//         // required:true,
        
//     },
    
//     parentname:{
//         type:String,
//         trim:true,
//         //required:true,
//     },
//     parentphone:{
//         type:String,
//         trim:true,
//         //required:true,
//     },
//     age:{
//         type:Number,
//         trim:true,
//         //required:true,
//     },
//     address:{
//         type:String,
//         trim:true,
//         //required:true,
//     },
//     gender:{
//         type:String,
//         trim:true,
//         //required:true,
    
//     },
     
// })

// module.exports = mongoose.model("Children", childrenSchema);


// models/Child.js
const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    parentname: {
        type: String,
        required: true
    },
    parentphone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        enum: ['baby', 'middle', 'top'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Child', ChildSchema);