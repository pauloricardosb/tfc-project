"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const pass = 'jwt_secret';
const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        jwt.verify(token, pass);
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
};
exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map