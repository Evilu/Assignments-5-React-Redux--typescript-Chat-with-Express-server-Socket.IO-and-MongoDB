"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var userListSchema = mongoose.Schema({
    username: { type: String, unique: true },
    id: Number
});
exports.default = mongoose.model('usersList', userListSchema);
