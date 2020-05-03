'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    totalRunningTime: DataTypes.INT
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};