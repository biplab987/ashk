"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/biplab", function (req, res) {
    res.status(200).json({ "message": "Welcome to typescript with node js" });
});
app.listen(5225, function () {
    console.log("server started");
});
