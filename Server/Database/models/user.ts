import mongoose,{ Schema } from 'mongoose';
import IUser from '../interfaces/user';


const UserSchema : Schema = new Schema(
    {
        //needs to be completed with more info
        user : {type:String,required:true},
        password : {type:String,required:true},
    },
    {
        timestamps : true
    }
);
const userModel = mongoose.model<IUser>("admin.Users",UserSchema);

export default userModel;