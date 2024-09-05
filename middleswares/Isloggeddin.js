const jwt = require("jsonwebtoken");
const userModel = require('../models/user-schema');


module.exports.isLoggedIn = async (req,res,next)=>{

    if(!req.cookies.token){
        req.flash("please login");
        res.send("Please login")
        return res.redirect("/");
       
}
try{
  const decode = jwt.verify(req.cookie.token,process.env.JWT_SECRET);
  let user = await userModel({email:decode.email}).select("-password");
  req.user = user;
  next()
}catch(err){
req.flash('error,Something went wrong');
res.redirect('/')
res.send('error,Something went wrong')
}



}