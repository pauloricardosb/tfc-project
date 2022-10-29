"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchesServices_1 = require("../services/matchesServices");
class MatchesController {
    constructor() {
        this.service = new matchesServices_1.default();
        this.getMatches = async (req, res) => {
            const { inProgress } = req.query;
            let matches;
            if (inProgress) {
                const matchInProgress = inProgress === 'true';
                matches = await this.service.getMatchInProgress(matchInProgress);
            }
            else {
                matches = await this.service.getMatches();
            }
            return res.status(200).json(matches);
        };
        this.createMatch = async (req, res) => {
            const { body } = req;
            const match = await this.service.createMatch(body);
            return res.status(201).json(match);
        };
        this.finishMatch = async (req, res) => {
            const { id } = req.params;
            await this.service.finishMatch(id);
            return res.status(200).json({ message: 'Finished' });
        };
        this.matchUpdate = async (req, res) => {
            const { id } = req.params;
            const { homeTeamGoals, awayTeamGoals } = req.body;
            await this.service.matchUpdate(id, homeTeamGoals, awayTeamGoals);
            return res.status(200).json({ message: 'Match updated' });
        };
    }
}
exports.default = MatchesController;
//# sourceMappingURL=matchesController.js.map