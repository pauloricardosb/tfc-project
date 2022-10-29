import { Request, Response } from 'express';
import LeaderboardServices from '../services/leaderboardServices';

class LeaderboardController {
  leaderboardServices: LeaderboardServices;

  constructor() {
    this.leaderboardServices = new LeaderboardServices();
  }

  getLeaderboardHome = async (_req: Request, res: Response) => {
    const leaderboardHome = await this
      .leaderboardServices
      .getLeaderboardHome();
    return res.status(200).json(leaderboardHome);
  };
}

export default LeaderboardController;
