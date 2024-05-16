const { urlencoded } = require("body-parser");
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000;
require("dotenv").config();
require("./dbConnection/connect");
const routes = require("./routes/routes")
// gives and acses data in the json formate
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/movieApi" , routes)
// statring and running server 
app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`); 
});
