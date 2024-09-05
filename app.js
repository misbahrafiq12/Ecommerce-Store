const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
const path = require('path');

const ownerRouter = require('./routes/ownerRouter.js');
const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');
const indexRouter = require('./routes/index.js')
require('dotenv').config();
const connection = require('./config/config.js')
const session = require('express-session');
const flash = require("connect-flash")

app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));
  app.use(flash())
app.use(express.static(path.join(__dirname, "public")))

connection

// app.get('/',(req,res)=>{
// res.send('Hello')
// })

app.use('/owner',ownerRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/',indexRouter)

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})