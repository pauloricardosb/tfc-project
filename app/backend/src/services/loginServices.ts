import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/User';

const pass = 'jwt_secret';
const jwtConfig = {
  expiresIn: '7d',
};

class LoginServices {
  getInfo = async (email: string, password: string) => {
    const userInfo = await User.findOne({ where: { email } });

    if (!userInfo) {
      return { code: 401, message: 'Incorrect email or password' };
    }

    const userPass = await bcrypt.compare(password, userInfo.password);

    if (!userPass) {
      return { code: 401, message: 'Incorrect email or password' };
    }

    const jwToken = jwt.sign({ id: userInfo.id, role: userInfo.role }, pass, jwtConfig);

    return jwToken;
  };

  validateToken = (token: string) => {
    const jwtDecoded = jwt.verify(token, pass) as jwt.JwtPayload;

    return jwtDecoded.role;
  };
}

export default LoginServices;
