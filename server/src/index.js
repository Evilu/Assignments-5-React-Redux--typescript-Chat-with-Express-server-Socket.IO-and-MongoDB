"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var index_js_1 = require("./routes/groups/index.js");
var index_js_2 = require("./routes/users/index.js");
var index_1 = require("./routes/messages/index");
var conn = mongoose.connection;
conn.on('error', function (err) { return console.log(err); });
var serverApp = express();
serverApp.use('/groups', index_js_1.default);
serverApp.use('/users', index_js_2.default);
serverApp.use('/messages', index_1.default);
mongoose.connect('mongodb://localhost:27017/ChatDB', { useNewUrlParser: true }, function (err) {
    if (err)
        throw err;
    console.log(' Mongoose chatDB Successfully connected');
});
serverApp.get("/", function (req, res) {
    res.send('This is a Chat server, keep going...');
});
serverApp.listen(4000, function () {
    console.log('server is running on:' + 'http://localhost:4000');
});
