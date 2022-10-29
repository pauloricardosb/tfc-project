"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leaderboardServices_1 = require("../services/leaderboardServices");
class LeaderboardController {
    constructor() {
        this.getLeaderboardHome = async (_req, res) => {
            try {
                const leaderboardHome = await this
                    .leaderboardServices
                    .getLeaderboardHome();
                return res.status(200).json(leaderboardHome);
            }
            catch {
                res.status(500).json({ message: 'Server internal error' });
            }
        };
        this.leaderboardServices = new leaderboardServices_1.default();
    }
}
exports.default = LeaderboardController;
//# sourceMappingURL=leaderboardController.js.map