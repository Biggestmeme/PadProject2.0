import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import UserRoutes from './routes/user';
import bodyParser from 'body-parser';
import http from 'http';
import User from "./models/user";


/*
WARNING : need to add AUTH for the DB API


*/

const NAMESPACE = 'Server';
const router = express();

mongoose.connect(config.mongo_connection_details.url,config.mongo_options)
    .then((result:any) => {
        console.log('CONNECTED TO MONGO')
    })
    .catch((error:any) => {
        console.log('ERROR CONNECTION TO MONGO');
    });




router.get('/',(req:any,res:any) => {
    res.send("Hello");
})

router.use('/api/users',UserRoutes);

const httpServer = http.createServer(router);
httpServer.listen(config.server_options.port, () => console.log("SERVER"));