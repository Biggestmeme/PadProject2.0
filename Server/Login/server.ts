import express from 'express'
import config from './config/config';
import loginRoutes from './routes/login';
import http from 'http';

const router = express();


router.use('/login',loginRoutes);



const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => console.log("SERVER"));