import { Router } from 'express';
import AuthController from '../controllers/auth/auth.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import loginSchema from '../schemas/login.schema';

const authRouter = Router();

authRouter.post('/auth', validationMiddleware(loginSchema), AuthController.login);

export default authRouter;
