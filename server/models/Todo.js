const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
            maxLength:50,
        },
        Email: {
            type:String,
            required:true,
            maxLength:50,
        },
        Phone: {
            type:String,
            required:true,
            maxLength:50,
        },
        Designation: {
            type:String,
            required:true,
            maxLength:50,
        },
        Country: {
            type:String,
            required:true,
            maxLength:50,
        },
        Industry: {
            type:String,
            required:true,
            maxLength:50,
        },
        
    }
);

module.exports = mongoose.model("Todo", todoSchema);