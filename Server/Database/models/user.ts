import mongoose,{ Schema } from 'mongoose';
import IUser from '../interfaces/user';


const UserSchema : Schema = new mongoose.Schema(
    {
        //needs to be completed with more info
        username : {
            type:String,
            required:true,
            unique:true
        },
        password : {
            type:String,
            required:true},
    },
    {
        collection : "Users",
        timestamps : true
    }
);
const userModel = mongoose.model<IUser>("Users",UserSchema);

export default userModel;