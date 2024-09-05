const mongoose  = require('mongoose');


const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minLength:3,
        trime:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    card:{
        type:Array,
        default:[]
    },
 
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:Number,
        // required:true
    },
    picture:{
        type:String,
        // required:true
    },
  
});

module.exports = mongoose.model("user",userSchema)