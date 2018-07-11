import * as mongoose from "mongoose";
import * as bcrypt from 'bcrypt';


const usersSchema = mongoose.Schema({
        username:{type:String,unique:true},
        password:{type:String},
        age:{type:String}
    },
    {collection:"users"}
);

//bcrypt is conceptual right now
usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};


usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

export default  mongoose.model ('users', usersSchema)