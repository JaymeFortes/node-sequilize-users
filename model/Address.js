import { Sequelize, DataTypes } from 'sequelize';
import db from '../db/conn.js';
import User from './User.js';

const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
});

//usuario pode ter varios endereços
User.hasMany(Address);
//relaciona um endereço a cada usuario
Address.belongsTo(User);

export default Address;
