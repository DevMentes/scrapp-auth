const Sequelize = require('sequelize');

module.exports = new Sequelize(
  process.env.database_name,
  process.env.database_user,
  process.env.database_password,
  {
    host: process.env.database_host,
    dialect: process.env.database_dialect,
    define: {
      underscored: true
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);
