const express = require('express');
// const {shop} = require('../controllers/product-controller')

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('Hello Product')
});
// router.get('/shop',shop)


module.exports = router;