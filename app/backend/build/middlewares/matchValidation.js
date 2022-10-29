"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Teams_1 = require("../database/models/Teams");
class MatchValidation {
    constructor() {
        this.validateTeams = (req, res, next) => {
            const { homeTeam, awayTeam } = req.body;
            if (homeTeam === awayTeam) {
                return res.status(422).json({
                    message: 'It is not possible to create a match with two equal teams'
                });
            }
            next();
        };
        this.isValidTeams = async (req, res, next) => {
            const { homeTeam, awayTeam } = req.body;
            const teams = await Promise.all([homeTeam, awayTeam].map((id) => Teams_1.default.findByPk(id)));
            if (teams.some((team) => team === null)) {
                return res.status(404).json({
                    message: 'There is no team with such id!',
                });
            }
            next();
        };
    }
}
exports.default = new MatchValidation();
//# sourceMappingURL=matchValidation.js.map