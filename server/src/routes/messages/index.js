"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var messages_1 = require("./../../models/messages");
var router = express.Router();
router.use(bodyparser.json());
router.get('/messages', function (req, res) {
    messages_1.default.find({}, { id: 1, groupId: 1, text: 1, user: 1, time: 1, _id: 0 }, function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: 'server error,could not get messages' });
        }
        res.json(data);
    });
});
//post a new message to db
router.post('/newMessage', function (req, res) {
    var newMessage = new messages_1.default(req.body);
    newMessage.save(function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: 'server error, could not post messages' });
        }
        console.log(req.session.user);
        res.json(data);
    });
});
exports.default = router;
