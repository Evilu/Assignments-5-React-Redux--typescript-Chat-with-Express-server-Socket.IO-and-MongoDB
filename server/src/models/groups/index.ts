import * as mongoose from "mongoose";


const groupsSchema = mongoose.Schema({
        groupName:{type:String,unique:true},
        GroupID:{type:String},
        private:{type: Boolean},
        between:{type:Array}
    },
    {collection:"groups"}
);

export default  mongoose.model ('groups', groupsSchema);

