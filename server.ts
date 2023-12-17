import express = require("express");
import accounts from "./account";

import transactions from "./transactions";


let app:any=express();
app.use("/module1",transactions);
app.use("/module2",accounts);
app.listen(8080,()=>{
  console.log("listening started");
  
})