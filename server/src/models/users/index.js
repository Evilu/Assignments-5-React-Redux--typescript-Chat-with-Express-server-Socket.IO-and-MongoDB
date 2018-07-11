"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var usersSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    age: { type: String }
}, { collection: "users" });
//bcrypt is conceptual right now
usersSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
usersSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};
exports.default = mongoose.model('users', usersSchema);
