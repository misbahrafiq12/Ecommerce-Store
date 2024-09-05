const express = require('express');
 const router = express.Router();
 const{registerUser,login} = require('../controllers/user-controller.js')



// router.get('/',(req,res)=>{
//     res.send('Hello User')
// })
// router.get('/show',show)
router.post('/register',registerUser);
router.post('/login',login)
// router.get('/logout',logout)
  


module.exports = router;