import { Request, Response } from 'express';
import LoginServices from '../services/loginServices';

class loginController {
  loginServices: LoginServices;

  constructor() {
    this.loginServices = new LoginServices();
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const getToken = await this.loginServices.getInfo(email, password);

    if (typeof getToken !== 'string' && 'message' in getToken) {
      return res.status(getToken.code).json({ message: getToken.message });
    }
    return res.status(200).json({ token: getToken });
  };

  validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const role = await this.loginServices.validateToken(authorization);

    return res.status(200).json({ role });
  };
}

export default loginController;
