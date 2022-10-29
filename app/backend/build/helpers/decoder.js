"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
function decodeToken(token) {
    const { payload } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
    return payload;
}
exports.default = decodeToken;
//# sourceMappingURL=decoder.js.map