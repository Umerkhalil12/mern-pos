const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { bgCyan } = require('colors');
const connectDb = require('./config/config');
 require('colors');
 // .env config
 dotenv.config();
 // db config
 connectDb();


 // rest object
 const app= express();
 //middleware
 app.use(cors());
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:false}));
 app.use(morgan('dev'));
 //routes
 app.use("/api/items",require("./route/itemRoutes"));
 app.use("/api/users",require("./route/userRoutes"));
 app.use("/api/bill",require("./route/billRoutes"));
 app.use("/api/dealers",require("./route/dealerRoutes"));
 app.use("/api/charges",require("./route/chargesRoutes"));

   
 
 
 //port
 const PORT = process.env.PORT || 8080;
 //
 app.listen(PORT,() =>{
    console.log(`server running on port  ${PORT}`.bgCyan.white);

 });