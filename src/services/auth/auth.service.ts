import UnauthorizedException from '../../exceptions/unauthorized.exception';
import UserService from '../user/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  async login(email: string, password: string) {
    const userService = new UserService();
    const secret = process.env.SECRET || '';
    const user = await userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('unauthorized');
    };

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('unauthorized');
    };

    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, secret);

    return token;
  }
};

export default AuthService;
