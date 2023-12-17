import express = require("express");

let accounts:any=express.Router();

accounts.get("/acnt",(req:any,res:any)=>{
  res.status(200).json({message:"Accounts"});
});

accounts.post("/acc",(req:any,res:any)=>{
  res.status(200).json({message:"account accepted"});
})

export default accounts;