import { Router } from 'express';
import UserController from '../controllers/user/user.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import createUserSchema from '../schemas/user.schema';

const userRouter = Router();

userRouter.post('/user', validationMiddleware(createUserSchema), UserController.create);

export default userRouter;
