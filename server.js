"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var account_1 = require("./account");
var transactions_1 = require("./transactions");
var app = express();
app.use("/module1", transactions_1.default);
app.use("/module2", account_1.default);
app.listen(8080, function () {
    console.log("listening started");
});
