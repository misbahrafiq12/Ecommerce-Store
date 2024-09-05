const mongoose = require('mongoose');
// const debgr = require('debug')("development:mongoose")


    try{
        mongoose.connect('mongodb://localhost:27017/Ecommerce-shop');
      console.log("connection")
    }catch(error){
        console.log(error);
    }


module.exports = mongoose.connection



