"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../database/models");
const leaderboardSQL_1 = require("../helpers/leaderboardSQL");
class LeaderboardServices {
    constructor() {
        this.getLeaderboardHome = async () => {
            const [homeLeaderboard] = await models_1.default.query(leaderboardSQL_1.default);
            return homeLeaderboard;
        };
    }
}
exports.default = LeaderboardServices;
// References:
// https://sequelize.org/docs/v6/core-concepts/raw-queries/
// https://sebhastian.com/sequelize-raw-query/
// Thanks for RK (Rafael Kaique) for the help!
//# sourceMappingURL=leaderboardServices.js.map