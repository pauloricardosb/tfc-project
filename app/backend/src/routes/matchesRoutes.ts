import { Router } from 'express';
import MatchesController from '../controllers/matchesController';
import authenticate from '../middlewares/authenticate';
import MatchValidation from '../middlewares/matchValidation';

const matches = Router();
const matchesController = new MatchesController();

matches.get('/', matchesController.getMatches);
matches.post(
  '/',
  authenticate,
  MatchValidation.validateTeams,
  MatchValidation.isValidTeams,
  matchesController.createMatch,
);
matches.patch('/:id/finish', matchesController.finishMatch);
matches.patch('/:id', matchesController.matchUpdate);

export default matches;
