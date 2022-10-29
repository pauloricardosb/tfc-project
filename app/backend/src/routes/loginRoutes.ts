import { Router } from 'express';
import LoginController from '../controllers/loginController';

const login = Router();
const loginControllers = new LoginController();

login.post('/', loginControllers.login);
login.get('/validate', loginControllers.validate);

export default login;
