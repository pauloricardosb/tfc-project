"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
const loginRoutes_1 = require("./routes/loginRoutes");
const teamsRoutes_1 = require("./routes/teamsRoutes");
const matchesRoutes_1 = require("./routes/matchesRoutes");
const leaderboardRoutes_1 = require("./routes/leaderboardRoutes");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/teams', teamsRoutes_1.default);
        this.app.use('/matches', matchesRoutes_1.default);
        this.app.use('/leaderboard', leaderboardRoutes_1.default);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map