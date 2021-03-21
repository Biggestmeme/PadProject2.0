import mongoose,{ Schema } from 'mongoose';
import IUser from '../interfaces/user';


const UserSchema : Schema = new Schema(
    {
        user : {type:String,required:true},
        password : {type:String,required:true},
       // extraInfo : {type:String}
    },
    {
        timestamps : true
    }
);
const userModel = mongoose.model<IUser>("admin.Users",UserSchema);

export default userModel;