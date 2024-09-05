const usermodel = require("../models/user-schema");
const { generateTokens } = require("../utils/generateTokens.js");
const bcrypt = require("bcrypt");

// index
module.exports.show = (req, res) => {
  res.render("index");
};

// register
module.exports.registerUser = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      // Check if email already exists
      const useremail = await usermodel.findOne({ email });
      if (useremail) {
        req.flash("error", "You already have an account, please login.");
        return res.redirect("/");
      }
  
      // Password hashing
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create user
      const createUser = await usermodel.create({
        fullname,
        email,
        password: hashedPassword,
      });
  
      // Generate token
      const token = generateTokens(createUser);
  
      // Set token in cookie
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
  
      req.flash("success", "Account created successfully!");
      res.redirect("/shop");
    } catch (err) {
      console.log("Server error", err);
      res.status(500).send("Internal server error");
    }
  };
  
// login
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const useremail = await usermodel.findOne({ email: email });
    if (!useremail){
        req.flash("error","Email or Password incorrect")
        return res.redirect('/')
    }
    //   return res.status(400).send("Email doesnot exits, please singin");
    bcrypt.compare(password, useremail.password, (err, result) => {
      if (!result){
req.flash("error", "Email or Password incorrect")
res.redirect('/')
      } 
      const token = generateTokens(useremail);
      res.cookie(token);
    res.redirect('/shop')
    //   res.status(201).send(useremail);
    });
  } catch (err) {
    console.log("Server error", err);
  }
};
