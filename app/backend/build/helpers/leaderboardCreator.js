"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAwayLeaderboard = exports.generateHomeLeaderboard = exports.calculateTeamEfficiency = exports.calculateGoalsBalance = exports.calculateGoalsOwn = exports.calculatePoints = exports.calculateTotalLosses = exports.calculateTotalDraws = exports.calculateTotalVictories = exports.calculateGoalsFavor = exports.calculateTotalGames = void 0;
function sortLeaderboard(lb) {
    const sorted = lb.sort((a, b) => {
        if (a.totalPoints !== b.totalPoints)
            return b.totalPoints - a.totalPoints;
        if (a.totalVictories !== b.totalVictories)
            return b.totalVictories - a.totalVictories;
        if (a.goalsBalance !== b.goalsBalance)
            return b.goalsBalance - a.goalsBalance;
        if (a.goalsFavor !== b.goalsFavor)
            return b.goalsFavor - a.goalsFavor;
        return b.goalsOwn - a.goalsOwn;
    });
    return sorted;
}
function calculateTotalGames(matches, teamId) {
    const totalGames = matches.reduce((acc, curr) => {
        if (curr.homeTeam === teamId || curr.awayTeam === teamId)
            return acc + 1;
        return acc;
    }, 0);
    return totalGames;
}
exports.calculateTotalGames = calculateTotalGames;
function calculateGoalsFavor(matches, teamId) {
    const totalGoals = matches.reduce((acc, curr) => {
        if (curr.homeTeam === teamId)
            return acc + curr.homeTeamGoals;
        if (curr.awayTeam === teamId)
            return acc + curr.awayTeamGoals;
        return acc;
    }, 0);
    return totalGoals;
}
exports.calculateGoalsFavor = calculateGoalsFavor;
function calculateTotalVictories(matches, teamId) {
    const totalVictories = matches.reduce((acc, curr) => {
        if (curr.homeTeam === teamId && curr.homeTeamGoals > curr.awayTeamGoals)
            return acc + 1;
        if (curr.awayTeam === teamId && curr.awayTeamGoals > curr.homeTeamGoals)
            return acc + 1;
        return acc;
    }, 0);
    return totalVictories;
}
exports.calculateTotalVictories = calculateTotalVictories;
function calculateTotalDraws(matches, teamId) {
    const totalDraws = matches.reduce((acc, curr) => {
        if ((curr.homeTeam === teamId || curr.awayTeam === teamId)
            && curr.homeTeamGoals === curr.awayTeamGoals)
            return acc + 1;
        return acc;
    }, 0);
    return totalDraws;
}
exports.calculateTotalDraws = calculateTotalDraws;
function calculateTotalLosses(matches, teamId) {
    const totalLosses = matches.reduce((acc, curr) => {
        if (curr.homeTeam === teamId && curr.homeTeamGoals < curr.awayTeamGoals)
            return acc + 1;
        if (curr.awayTeam === teamId && curr.awayTeamGoals < curr.homeTeamGoals)
            return acc + 1;
        return acc;
    }, 0);
    return totalLosses;
}
exports.calculateTotalLosses = calculateTotalLosses;
function calculatePoints(matches, teamId) {
    const victories = calculateTotalVictories(matches, teamId);
    const draws = calculateTotalDraws(matches, teamId);
    return victories * 3 + draws;
}
exports.calculatePoints = calculatePoints;
function calculateGoalsOwn(matches, teamId) {
    const goalsOwn = matches.reduce((acc, curr) => {
        if (curr.homeTeam === teamId)
            return acc + curr.awayTeamGoals;
        if (curr.awayTeam === teamId)
            return acc + curr.homeTeamGoals;
        return acc;
    }, 0);
    return goalsOwn;
}
exports.calculateGoalsOwn = calculateGoalsOwn;
function calculateGoalsBalance(matches, teamId) {
    const goalsFavor = calculateGoalsFavor(matches, teamId);
    const goalsOwn = calculateGoalsOwn(matches, teamId);
    return goalsFavor - goalsOwn;
}
exports.calculateGoalsBalance = calculateGoalsBalance;
function calculateTeamEfficiency(matches, teamId) {
    const totalPoints = calculatePoints(matches, teamId);
    const totalGames = calculateTotalGames(matches, teamId);
    return +((totalPoints / (totalGames * 3)) * 100).toFixed(2);
}
exports.calculateTeamEfficiency = calculateTeamEfficiency;
function generateLeaderboard(matches, teams) {
    const leaderboard = teams.map(({ id, teamName }) => {
        const teamLeaderboard = {
            name: teamName,
            totalPoints: calculatePoints(matches, id),
            totalGames: calculateTotalGames(matches, id),
            totalVictories: calculateTotalVictories(matches, id),
            totalDraws: calculateTotalDraws(matches, id),
            totalLosses: calculateTotalLosses(matches, id),
            goalsFavor: calculateGoalsFavor(matches, id),
            goalsOwn: calculateGoalsOwn(matches, id),
            goalsBalance: calculateGoalsBalance(matches, id),
            efficiency: calculateTeamEfficiency(matches, id),
        };
        return teamLeaderboard;
    });
    return sortLeaderboard(leaderboard);
}
exports.default = generateLeaderboard;
function generateTeamLeaderboard(matches, teamId, teamName) {
    const leaderboard = {
        name: teamName,
        totalPoints: calculatePoints(matches, teamId),
        totalGames: calculateTotalGames(matches, teamId),
        totalVictories: calculateTotalVictories(matches, teamId),
        totalDraws: calculateTotalDraws(matches, teamId),
        totalLosses: calculateTotalLosses(matches, teamId),
        goalsFavor: calculateGoalsFavor(matches, teamId),
        goalsOwn: calculateGoalsOwn(matches, teamId),
        goalsBalance: calculateGoalsBalance(matches, teamId),
        efficiency: calculateTeamEfficiency(matches, teamId),
    };
    return leaderboard;
}
function generateHomeLeaderboard(matches, teams) {
    const homeLeaderboard = teams.map(({ id, teamName }) => {
        const filtered = matches.filter((match) => match.homeTeam === id);
        return generateTeamLeaderboard(filtered, id, teamName);
    });
    return sortLeaderboard(homeLeaderboard);
}
exports.generateHomeLeaderboard = generateHomeLeaderboard;
function generateAwayLeaderboard(matches, teams) {
    const homeLeaderboard = teams.map(({ id, teamName }) => {
        const filtered = matches.filter((match) => match.awayTeam === id);
        return generateTeamLeaderboard(filtered, id, teamName);
    });
    return sortLeaderboard(homeLeaderboard);
}
exports.generateAwayLeaderboard = generateAwayLeaderboard;
//# sourceMappingURL=leaderboardCreator.js.map