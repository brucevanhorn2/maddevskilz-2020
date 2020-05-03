'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    publisher: DataTypes.STRING,
    released: DataTypes.STRING,
    url: DataTypes.STRING,
    repositoryUrl: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};