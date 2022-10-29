"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
const login = (0, express_1.Router)();
const loginControllers = new loginController_1.default();
login.post('/', loginControllers.login);
login.get('/validate', loginControllers.validate);
exports.default = login;
//# sourceMappingURL=loginRoutes.js.map