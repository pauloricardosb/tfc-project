"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamsController_1 = require("../controllers/teamsController");
const teams = (0, express_1.Router)();
const teamsControllers = new teamsController_1.default();
teams.get('/', teamsControllers.getTeams);
teams.get('/:id', teamsControllers.getTeamById);
exports.default = teams;
//# sourceMappingURL=teamsRoutes.js.map