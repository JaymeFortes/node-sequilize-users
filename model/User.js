import { Sequelize, DataTypes } from 'sequelize';
import db from '../db/conn.js';

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
});

export default User;
