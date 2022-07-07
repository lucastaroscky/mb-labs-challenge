import { Repository } from 'typeorm';
import { AppDataSource } from '../../../configs/database/data-source';
import { User } from '../../entities';
import { CreateUserDTO } from './user.dto';
import bcrypt from 'bcrypt';
import BadRequestException from '../../exceptions/bad-request.exception';
import jwt from 'jsonwebtoken';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async getUserByEmail(email: string) {
    const userFound = await this.userRepository.findOne({ where: { email } });

    return userFound;
  }

  async create(user: CreateUserDTO) {
    const { email, password } = user;
    const userAlreadyExists = await this.getUserByEmail(email);
    const secret = process.env.SECRET || '';
    const SALTS = 10;

    if (userAlreadyExists) {
      throw new BadRequestException('User already exists!');
    }

    const userPayload = {
      email,
      password: await bcrypt.hash(password, SALTS)
    };

    const createdUser = await this.userRepository.save(userPayload);

    const token = jwt.sign({
      sub: createdUser.id,
      iat: Date.now(),
      email: user.email
    }, secret);

    return token;
  }
}

export default UserService;
