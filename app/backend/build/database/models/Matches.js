"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Teams_1 = require("./Teams");
class Match extends sequelize_1.Model {
}
Match.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    homeTeam: {
        allowNull: false,
        type: sequelize_1.INTEGER,
        references: {
            model: 'teams',
            key: 'id',
        },
    },
    homeTeamGoals: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    awayTeam: {
        allowNull: false,
        type: sequelize_1.INTEGER,
        references: {
            model: 'teams',
            key: 'id',
        },
    },
    awayTeamGoals: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    inProgress: {
        allowNull: false,
        type: sequelize_1.BOOLEAN,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    timestamps: false,
    modelName: 'matches',
});
Match.belongsTo(Teams_1.default, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Teams_1.default, { foreignKey: 'awayTeam', as: 'teamAway' });
exports.default = Match;
//# sourceMappingURL=Matches.js.map