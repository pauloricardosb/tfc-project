"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchesController_1 = require("../controllers/matchesController");
const authenticate_1 = require("../middlewares/authenticate");
const matchValidation_1 = require("../middlewares/matchValidation");
const matches = (0, express_1.Router)();
const matchesController = new matchesController_1.default();
matches.get('/', matchesController.getMatches);
matches.post('/', authenticate_1.default, matchValidation_1.default.validateTeams, matchValidation_1.default.isValidTeams, matchesController.createMatch);
matches.patch('/:id/finish', matchesController.finishMatch);
matches.patch('/:id', matchesController.matchUpdate);
exports.default = matches;
//# sourceMappingURL=matchesRoutes.js.map