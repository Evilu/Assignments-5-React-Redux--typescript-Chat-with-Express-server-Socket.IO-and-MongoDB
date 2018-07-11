import * as mongoose from "mongoose";

const userListSchema = mongoose.Schema({
    username: {type: String, unique: true},
    id: Number
});



export default  mongoose.model ('usersList', userListSchema);