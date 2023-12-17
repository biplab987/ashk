import express = require("express");

let transactions:any=express.Router();

transactions.get("/",(req:any,res:any)=>{
  res.status(200).json({message:"transactions soon......"});
});

transactions.get("/biplab",(req:any,res:any)=>{
res.status(200).json({message:"transaction done"});
})

export default transactions;