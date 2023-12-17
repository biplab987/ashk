"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transactions soon......" });
});
transactions.get("/biplab", function (req, res) {
    res.status(200).json({ message: "transaction done" });
});
exports.default = transactions;
