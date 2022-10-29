"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teamsServices_1 = require("../services/teamsServices");
class TeamsControllers {
    constructor() {
        this.getTeams = async (_req, res) => {
            const teams = await this.teamsServices.getTeams();
            return res.status(200).json(teams);
        };
        this.getTeamById = async (req, res) => {
            const { id } = req.params;
            const team = await this.teamsServices.getTeamById(id);
            return res.status(200).json(team);
        };
        this.teamsServices = new teamsServices_1.default();
    }
}
exports.default = TeamsControllers;
//# sourceMappingURL=teamsController.js.map