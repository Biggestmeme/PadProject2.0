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
const getUser = (req:any,res:any) => {
    //to do in-to the future add find by email
    User.findOne(req.query)
        .exec()
        .then((result:any) => {
            res.send(result);
        })
        .catch((error:any) => {
            res.send([]);
        })
}
const createUser = (req:any,res:any) => {
    let newUser = new User(req.query);
    newUser.save()
        .then(
            res.send(newUser)
        )
        .catch((error:any) => {
            res.send([]);
        })
}
const deleteUser = (req:any,res:any) => {}

const updateUser = (req:any,res:any) => {
    User.updateOne({username:req.query.username},req.query)
        .then((result:any) => {
            getUser(req,res);
        })
        .catch((error:any) => {
            res.send([]);
        })
}

export default { getAllUsers,getUser,createUser,deleteUser,updateUser };