import Team from '../database/models/Teams';
import MatchesModel from '../database/models/Matches';
import { IMatch, INewMatch } from '../interfaces';

class MatchesServices {
  getMatches = async (): Promise<IMatch[]> => {
    const matches = await MatchesModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  getMatchInProgress = async (inProgress: boolean): Promise<IMatch[]> => {
    const matchInProgress = await MatchesModel.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return matchInProgress;
  };

  createMatch = async (body: INewMatch) => {
    const inProgress = true;

    const newMatch = await MatchesModel.create({ ...body, inProgress });
    return newMatch;
  };

  finishMatch = async (id: string): Promise<void> => {
    await MatchesModel.update({ inProgress: false }, { where: { id } });
  };

  matchUpdate = async (id: string, homeTeamGoals: number, awayTeamGoals: number) => {
    const update = await MatchesModel
      .update(
        { homeTeamGoals, awayTeamGoals },
        { where: { id } },
      );

    return update;
  };
}

export default MatchesServices;
