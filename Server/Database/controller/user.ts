import User from '../models/user'
import IUser from '../interfaces/user';

//TO DO
const getAllUsers = (req:any,res:any) => {
    User.find()
        .exec()
        .then((result:any) => {
            res.send({
                response : result,
                total : result.length
            });
        })
        .catch((error:any) => {
            res.send({
                response : [],
                total : 0
            });
        })
}
const getUsers = (req:any,res:any) => {
    //to do in-to the future add find by email
    User.findOne(req.query)
        .exec()
        .then((result:any) => {
            console.log(req.query);
            console.log(result);
            res.send(result);
        })
        .catch((error:any) => {
            res.send([]);
        })
}
const createUser = (req:any,res:any) => {}
const deleteUser = (req:any,res:any) => {}
const updateUser = (req:any,res:any) => {}

export default { getAllUsers,getUsers,createUser,deleteUser,updateUser };