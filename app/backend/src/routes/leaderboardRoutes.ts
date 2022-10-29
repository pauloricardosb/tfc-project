import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboard = Router();
const leaderboardControllers = new LeaderboardController();

leaderboard.get('/home', leaderboardControllers.getLeaderboardHome);

export default leaderboard;
