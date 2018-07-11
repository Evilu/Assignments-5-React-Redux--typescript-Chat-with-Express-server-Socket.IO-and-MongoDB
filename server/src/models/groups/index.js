"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var groupsSchema = mongoose.Schema({
    groupName: { type: String, unique: true },
    GroupID: { type: String },
    private: { type: Boolean },
    between: { type: Array }
}, { collection: "groups" });
exports.default = mongoose.model('groups', groupsSchema);
