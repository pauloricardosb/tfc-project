import { Request, Response, NextFunction } from 'express';
import Team from '../database/models/Teams';

class MatchValidation {
  validateTeams = (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    next();
  };

  isValidTeams = async (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    const teams = await Promise.all([homeTeam, awayTeam].map((id) => Team.findByPk(id)));

    if (teams.some((team) => team === null)) {
      return res.status(404).json({
        message: 'There is no team with such id!',
      });
    }
    next();
  };
}

export default new MatchValidation();
