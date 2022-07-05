import { Router } from 'express';
import passport from 'passport';
import TicketController from '../controllers/tickets/ticket.controller';
import injectUser from '../middlewares/inject-user.middleware';

const ticketsRouter = Router();

ticketsRouter.post('/tickets', passport.authenticate('jwt', { session: false }), injectUser, TicketController.add);
ticketsRouter.delete('/tickets/:eventId', passport.authenticate('jwt', { session: false }), injectUser, TicketController.remove);

export default ticketsRouter;
