import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const pass = 'jwt_secret';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, pass) as jwt.JwtPayload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default authenticate;
