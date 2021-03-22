import express from 'express';
import controller from "../controler/login";

const router = express.Router();

router.get('/',controller.getUserData);

export = router;