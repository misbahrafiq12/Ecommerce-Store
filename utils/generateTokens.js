const jwt = require('jsonwebtoken')
const generateTokens = (user)=>{
    return  token = jwt.sign({email:user.email,id:user._id},process.env.JWT_SECRET);
}

module.exports = {generateTokens}; 