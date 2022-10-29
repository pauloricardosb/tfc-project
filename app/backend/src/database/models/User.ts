import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id: number;
  username: string;
  email: string;
  role: string;
  password: string;
}

User.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: INTEGER,
    },
    username: {
      allowNull: false,
      type: STRING,
    },
    email: {
      allowNull: false,
      type: STRING,
    },
    role: {
      allowNull: false,
      type: STRING,
    },
    password: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'users',
  },
);

export default User;
