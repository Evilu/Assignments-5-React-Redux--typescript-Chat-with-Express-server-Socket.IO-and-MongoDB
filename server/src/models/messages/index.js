"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var messagesSchema = mongoose.Schema({
    id: { type: String, unique: true },
    groupId: { type: String },
    text: { type: String },
    user: { type: Object },
    time: { type: String }
}, { collection: "messages" });
exports.default = mongoose.model('messages', messagesSchema);
