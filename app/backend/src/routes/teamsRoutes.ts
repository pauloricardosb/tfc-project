import { Router } from 'express';
import TeamsControllers from '../controllers/teamsController';

const teams = Router();
const teamsControllers = new TeamsControllers();

teams.get('/', teamsControllers.getTeams);
teams.get('/:id', teamsControllers.getTeamById);

export default teams;
