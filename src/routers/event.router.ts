import { Router } from 'express';
import passport from 'passport';

import EventController from '../controllers/event/event.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import createEventSchema from '../schemas/event.schema';

const eventRouter = Router();

eventRouter.post(
  '/event',
  passport.authenticate('jwt', { session: false }),
  validationMiddleware(createEventSchema),
  EventController.create
);

eventRouter.put(
  '/event/:id',
  passport.authenticate('jwt', { session: false }),
  EventController.update);

eventRouter.get('/event', passport.authenticate('jwt', { session: false }), EventController.list);
eventRouter.get('/event/:id', passport.authenticate('jwt', { session: false }), EventController.listOne);

eventRouter.delete(
  '/event/:id',
  passport.authenticate('jwt', { session: false }),
  EventController.delete);

export default eventRouter;
