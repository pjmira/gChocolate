const express = require('express');
const productCategories = require('./Routes/productCategories');
const app = express();

app.use("/productCategories", productCategories)





const PORT = 5001;
 

const server = app.listen(PORT, ()=>{
  console.log("App is running on the port - 5001")
})