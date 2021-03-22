import express from 'express';
import controller from '../controller/user';

const router = express.Router();

router.get('/get/AllUsers',controller.getAllUsers);
router.get('/get/user',controller.getUsers);
router.post('/delete/users',controller.deleteUser);
router.get('/create/user',controller.createUser);
router.post('/update/user',controller.updateUser);


export = router;