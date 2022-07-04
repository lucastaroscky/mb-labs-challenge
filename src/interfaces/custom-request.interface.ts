import { Request } from 'express';
import { User } from '../entities';

interface CustomResquest extends Request {
  loggedUser?: User
}

export default CustomResquest;
