const express = require('express');
// const ownerController = require('../controllers/owner-controller.js')
const ownerModel = require('../models/owner-schema.js');

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('Hello Owner')
})
router.post('/ownercreate',async(req,res)=>{
    try{
     
        const owner = await ownerModel.find();
        if(owner.length > 0) return res.status(503).send("you don't have permission to create new user")
        const {fullname, email ,password} =req.body;
    
         let createOwner = await ownerModel.create({fullname, email ,password});

         res.status(201).send(createOwner)
    
      
    
       }catch(err){
        console.log("server Error",err)
       }
    })

// router.get('/ownerread',ownerController.read);


module.exports = router;


