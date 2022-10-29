import Team from '../database/models/Teams';

class TeamsServices {
  getTeams = async () => {
    const teams = await Team.findAll();

    return teams;
  };

  getTeamById = async (id: string) => {
    const team = await Team.findByPk(id);

    return team;
  };
}

export default TeamsServices;
