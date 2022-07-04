import { Request } from 'express';
import HTTP_STATUS from '../../enums/http-status.enum';
import CustomResponse from '../../interfaces/custom-response.interface';
import UserService from '../../services/user/user.service';

const userService = new UserService();

class UserController {
  public static async create(request: Request, response: CustomResponse) {
    try {
      const { body } = request;
      const user = await userService.create(body);

      response.status(HTTP_STATUS.CREATED).json({ id: user.id, email: user.email });
    } catch (err) {
      response.errorHandler && response.errorHandler(err);
    }
  }
}

export default UserController;
