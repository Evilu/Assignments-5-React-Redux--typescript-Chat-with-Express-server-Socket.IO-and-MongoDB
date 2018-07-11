import * as mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
        id:{type:String,unique:true},
        groupId:{type:String},
         text:{type:String},
         user:{type:Object},
          time:{type:String}
    },
    {collection:"messages"}
);




export default  mongoose.model ('messages', messagesSchema)