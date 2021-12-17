'use strict';
const {
  Model
} = require('sequelize');

const Role = require('./index').Roles;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of  Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, {as: 'role', foreignKey: 'role_id'})
    }
  };

  User.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     validate:{
      notNull: true,
     }
    },
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    role_id: DataTypes.NUMBER,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER,
    dob: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};