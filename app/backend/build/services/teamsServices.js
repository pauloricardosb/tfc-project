"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Teams_1 = require("../database/models/Teams");
class TeamsServices {
    constructor() {
        this.getTeams = async () => {
            const teams = await Teams_1.default.findAll();
            return teams;
        };
        this.getTeamById = async (id) => {
            const team = await Teams_1.default.findByPk(id);
            return team;
        };
    }
}
exports.default = TeamsServices;
//# sourceMappingURL=teamsServices.js.map