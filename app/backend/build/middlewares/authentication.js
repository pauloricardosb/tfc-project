"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decoder_1 = require("../helpers/decoder");
function authenticate(request, response, next) {
    const { authorization } = request.headers;
    if (!authorization)
        return response.status(401).json({ message: 'Token must be a valid token' });
    try {
        (0, decoder_1.default)(authorization);
    }
    catch {
        return response.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
}
exports.default = authenticate;
//# sourceMappingURL=authentication.js.map