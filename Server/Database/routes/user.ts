import express from 'express';
import controller from '../controller/user';

const router = express.Router();

router.get('/get/users',controller.getAllUsers);
router.post('/delete/users',controller.deleteUser);
router.get('/create/user',controller.createUser);
router.post('/update/user',controller.updateUser);


export = router;