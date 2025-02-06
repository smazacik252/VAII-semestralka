import { Router } from 'express';
import UserController from '../controllers/user.controller';
import {
    createUserValidator,
    loginValidator,
    userIdValidator
} from '../validators/userValidator';
import { validateRequest } from '../middleware/validateRequest';

const userController = new UserController();
const router = Router();

router.post('/login', loginValidator, validateRequest, userController.login);
router.post('/', createUserValidator, validateRequest,userController.createUser);
router.get('/', userController.getAll);
router.get('/:id', userIdValidator, validateRequest, userController.getUserById);
router.put('/:id', userIdValidator, validateRequest, userController.updateUser);

export default router;
