import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(45), 
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(75), 
    allowNull: false,
    unique: true, 
  },
  password: {
    type: DataTypes.STRING(255), 
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
}, {
  timestamps: false, 
});

export default User;
