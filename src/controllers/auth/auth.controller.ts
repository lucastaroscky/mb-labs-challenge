import { Request } from 'express';
import HTTP_STATUS from '../../enums/http-status.enum';
import CustomResponse from '../../interfaces/custom-response.interface';
import AuthService from '../../services/auth/auth.service';

const authService = new AuthService();

class AuthController {
  public static async login(request: Request, response: CustomResponse) {
    const { body: { email, password } } = request;

    try {
      const token = await authService.login(email, password);

      response.status(HTTP_STATUS.OK).json({ token });
    } catch (e) {
      response.errorHandler && response.errorHandler(e);
    }
  }
}

export default AuthController;
