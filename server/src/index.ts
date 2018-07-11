import * as express from "express";
import * as mongoose from "mongoose";
import groupsRouter from './routes/groups/index.js'
import usersRouter from './routes/users/index.js'
import messagesRouter from "./routes/messages/index"
const conn= mongoose.connection;
conn.on('error', (err)=> console.log(err));
const serverApp = express();


serverApp.use('/groups', groupsRouter);
serverApp.use('/users', usersRouter);
serverApp.use('/messages',messagesRouter)

mongoose.connect('mongodb://localhost:27017/ChatDB',{ useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log(' Mongoose chatDB Successfully connected');
});

serverApp.get ("/", (req,res) => {
    res.send ('This is a Chat server, keep going...');
} );

serverApp.listen(4000,function(){
    console.log('server is running on:' + 'http://localhost:4000');
});


