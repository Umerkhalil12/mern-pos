const mongoose = require('mongoose');
require('colors');

//datbase connection
 const connectDb= async () =>{
    try {
        const conn =  await mongoose.connect(process.env.MONGOS_URI );
        console.log(`mongodb connected ${conn.connection.host}`.bgYellow)
        
    } catch (error) {
        console.log(`error : ${error.message}`.bgRed);
        process.exit(1);
        
    }


 }
 //export
 module.exports = connectDb;