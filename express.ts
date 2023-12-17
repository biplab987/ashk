import express = require("express");

let app:any = express();

app.get("/biplab",(req:any,res:any):any=>{
  res.status(200).json({"message":"Welcome to typescript with node js"});
});


app.listen(5225,()=>{
  console.log("server started");
  
})