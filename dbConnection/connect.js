const mongoose = require("mongoose");
require("dotenv").config();

// mongoose connection
const connect = mongoose.connect(process.env.MONGO_DB_URL);
// condition for message 
connect ? console.log("connection successfull....") : console.log(err);
