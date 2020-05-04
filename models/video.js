'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    published: DataTypes.STRING,
    totalRunningTime: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
  };
  return Video;
};