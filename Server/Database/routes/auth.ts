import controller from '../controller/auth';
import express from 'express';

const router = express.Router();

router.all('*',controller.auth);


export = router;


