import { Request, Response } from 'express';
import MatchesService from '../services/matchesServices';

class MatchesController {
  private service = new MatchesService();

  getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    let matches;

    if (inProgress) {
      const matchInProgress = inProgress === 'true';
      matches = await this.service.getMatchInProgress(matchInProgress);
    } else {
      matches = await this.service.getMatches();
    }

    return res.status(200).json(matches);
  };

  createMatch = async (req: Request, res: Response) => {
    const { body } = req;
    const match = await this.service.createMatch(body);

    return res.status(201).json(match);
  };

  finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.service.finishMatch(id);

    return res.status(200).json({ message: 'Finished' });
  };

  matchUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await this.service.matchUpdate(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Match updated' });
  };
}

export default MatchesController;
