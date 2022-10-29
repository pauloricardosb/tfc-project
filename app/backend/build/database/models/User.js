"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    username: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    role: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    timestamps: false,
    modelName: 'users',
});
exports.default = User;
//# sourceMappingURL=User.js.map