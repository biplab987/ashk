"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/acnt", function (req, res) {
    res.status(200).json({ message: "Accounts" });
});
accounts.post("/acc", function (req, res) {
    res.status(200).json({ message: "account accepted" });
});
exports.default = accounts;
