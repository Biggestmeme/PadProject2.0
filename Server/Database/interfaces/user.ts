import { Document } from 'mongoose';

export default interface IUser extends Document {
    //needs to be completed with more info
    username : string;
    password : string;
};