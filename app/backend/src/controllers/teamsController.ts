import { Request, Response } from 'express';
import TeamsServices from '../services/teamsServices';

class TeamsControllers {
  teamsServices: TeamsServices;

  constructor() {
    this.teamsServices = new TeamsServices();
  }

  getTeams = async (_req: Request, res: Response) => {
    const teams = await this.teamsServices.getTeams();

    return res.status(200).json(teams);
  };

  getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const team = await this.teamsServices.getTeamById(id);

    return res.status(200).json(team);
  };
}

export default TeamsControllers;
