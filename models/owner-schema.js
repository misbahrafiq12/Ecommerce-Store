const mongoose  = require('mongoose');


const ownerSchema = mongoose.Schema({
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
    // products:{
    //     type:Array,
    //     default:[]
    // },
    // picture:{
    //     type:String,
       
    // },
    // gst:{
    //     type:String,
        
    // }
  
});

module.exports = mongoose.model("owner",ownerSchema)