"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var users_1 = require("./../../models/users");
var router = express.Router();
router.get('/', function (req, res, next) {
    users_1.default.find()
        .then(function (data) {
        res.json(data);
    })
        .catch(function (err) {
        res.status(500).send(err);
    });
});
router.post('/', function (req, res, next) {
    var user = new users_1.default({ username: "mike", password: 555, age: 31 }); //sanity check
    user.save().then(function () {
        users_1.default.find()
            .then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
            res.status(500).send(err);
        });
    });
});
exports.default = router;
