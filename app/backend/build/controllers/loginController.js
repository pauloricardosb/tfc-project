"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginServices_1 = require("../services/loginServices");
class loginController {
    constructor() {
        this.login = async (req, res) => {
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
        this.validate = async (req, res) => {
            const { authorization } = req.headers;
            if (!authorization) {
                return res.status(401).json({ message: 'Token not found' });
            }
            const role = await this.loginServices.validateToken(authorization);
            return res.status(200).json({ role });
        };
        this.loginServices = new loginServices_1.default();
    }
}
exports.default = loginController;
//# sourceMappingURL=loginController.js.map