"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboardController_1 = require("../controllers/leaderboardController");
const leaderboard = (0, express_1.Router)();
const leaderboardControllers = new leaderboardController_1.default();
leaderboard.get('/home', leaderboardControllers.getLeaderboardHome);
exports.default = leaderboard;
//# sourceMappingURL=leaderboardRoutes.js.map