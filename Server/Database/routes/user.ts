import express from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/get/users',(req,res) => {
    User.find({})
    .then((results:any) => {
       return res.status(200).json({
           users : results,
           length : results.length
       })
    })
    .catch((error:any) => {
        console.log("ERROR GET USERS");
    })
});


router.get('/create/user',(req,res) => {
    console.log("HELLO?");
    let username = "bogdale";
    let password = "123456";

    const book = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password
    });

    return book
        .save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
})

export = router;