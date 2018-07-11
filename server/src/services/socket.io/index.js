"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIO = require("socket.io");
function socket(httpServer) {
    var io = socketIO.listen(httpServer);
    io.on('connection', function (socket) {
        console.log('a new socket connection was established', socket.id);
        socket.on('login', function (username) {
            socket.username = username;
            console.log("The User " + username + " Is onLine");
            socket.broadcast.emit('connections', username);
        });
        socket.on('join-group', function (username, groupId) {
            console.log("username: " + username + " has joined " + groupId);
            socket.join(groupId);
        });
        socket.on('msg', function (groupId, message, username) {
            io.to(groupId).emit('msg', { content: message, sender: username, date: new Date().toLocaleTimeString() });
            console.log(" message " + message + " was sent by " + username + " to group id " + groupId);
        });
        socket.on('logOutGroup', function (username, groupId) {
            socket.leave(groupId);
            console.log("The User: " + username + " Has Logged out group: " + groupId);
        });
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
}
exports.default = socket;
