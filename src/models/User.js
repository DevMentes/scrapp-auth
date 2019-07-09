const sequelize = require('sequelize');
const database = require('./../persistence/sequelize/database');

const User = database.define('user',{
  id: {
    type: sequelize.STRING,
    primaryKey: true
  },
  email: sequelize.STRING,
  password: sequelize.STRING
});

module.exports = User;