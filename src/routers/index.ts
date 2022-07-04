import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import errorHandlerMiddleware from '../middlewares/error-handler.middleware';
import authRouter from './auth.user';
import userRouter from './user.router';

const routes = [
  userRouter,
  authRouter
];

function startRoutes(app: Application) {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(errorHandlerMiddleware);

  app.use(routes);
}

export default startRoutes;
