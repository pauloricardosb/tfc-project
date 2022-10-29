"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User_1 = require("../database/models/User");
const pass = 'jwt_secret';
const jwtConfig = {
    expiresIn: '7d',
};
class LoginServices {
    constructor() {
        this.getInfo = async (email, password) => {
            const userInfo = await User_1.default.findOne({ where: { email } });
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
        this.validateToken = (token) => {
            const jwtDecoded = jwt.verify(token, pass);
            return jwtDecoded.role;
        };
    }
}
exports.default = LoginServices;
//# sourceMappingURL=loginServices.js.map