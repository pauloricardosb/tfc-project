"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Teams_1 = require("../database/models/Teams");
const Matches_1 = require("../database/models/Matches");
class MatchesServices {
    constructor() {
        this.getMatches = async () => {
            const matches = await Matches_1.default.findAll({
                include: [
                    { model: Teams_1.default, as: 'teamHome', attributes: ['teamName'] },
                    { model: Teams_1.default, as: 'teamAway', attributes: ['teamName'] },
                ],
            });
            return matches;
        };
        this.getMatchInProgress = async (inProgress) => {
            const matchInProgress = await Matches_1.default.findAll({
                where: { inProgress },
                include: [
                    { model: Teams_1.default, as: 'teamHome', attributes: ['teamName'] },
                    { model: Teams_1.default, as: 'teamAway', attributes: ['teamName'] },
                ],
            });
            return matchInProgress;
        };
        this.createMatch = async (body) => {
            const inProgress = true;
            const newMatch = await Matches_1.default.create({ ...body, inProgress });
            return newMatch;
        };
        this.finishMatch = async (id) => {
            await Matches_1.default.update({ inProgress: false }, { where: { id } });
        };
        this.matchUpdate = async (id, homeTeamGoals, awayTeamGoals) => {
            const update = await Matches_1.default
                .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
            return update;
        };
    }
}
exports.default = MatchesServices;
//# sourceMappingURL=matchesServices.js.map