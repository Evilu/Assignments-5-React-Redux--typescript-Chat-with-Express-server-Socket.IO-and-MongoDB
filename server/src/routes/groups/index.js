"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var groups_1 = require("./../../models/groups");
var router = express.Router();
//gets all groups
router.get('/groups', function (req, res) {
    groups_1.default.find({}, { name: 1, id: 1, _id: 0 }, function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: 'server error, could not find groups' });
        }
        res.json(data);
    });
});
// this route returns all groups including private conversation for that user
router.get('/groups/:name', function (req, res) {
    groups_1.default.find({ $or: [{ between: req.params.name }, { private: false }] }, { name: 1, id: 1, private: 1, between: 1, _id: 0 }, function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: 'server error, could not get private groups conversation with users' });
        }
        res.json(data);
    });
});
router.post('/groups', function (req, res) {
    var newGroup = new groups_1.default(req.body);
    newGroup.save(function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: 'internal server error' });
        }
        res.json(data);
    });
});
exports.default = router;
