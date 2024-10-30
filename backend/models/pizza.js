import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Pizza = sequelize.define('Pizza', {
  name: {
    type: DataTypes.STRING(45), 
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING(155), 
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING(512), 
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
}, {
  timestamps: false, 
});

export default Pizza;
