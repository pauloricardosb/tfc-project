import models from '../database/models';
import QUERY_SQL from '../helpers/leaderboardSQL';

class LeaderboardServices {
  public getLeaderboardHome = async () => {
    const [homeLeaderboard] = await models.query(QUERY_SQL);
    return homeLeaderboard;
  };
}
export default LeaderboardServices;

// References:

// https://sequelize.org/docs/v6/core-concepts/raw-queries/
// https://sebhastian.com/sequelize-raw-query/

// Thanks for RK (Rafael Kaique) for the help!
