import express from 'express';
import controller from '../controller/user';

const router = express.Router();

router.get('/get/AllUsers',controller.getAllUsers);
router.get('/get/user',controller.getUser);
router.get('/delete/users',controller.deleteUser);
router.get('/create/user',controller.createUser);
router.get('/update/user',controller.updateUser);


export = router;