module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Video', [{
        title: 'Mock RESTful Data APIs with json-server and Faker',
        description: "Front-end developers can\'t generally do very much without a working back-end API, until now. Learn to use the json-server Node package to create a mock back-end that responds to all the normal HTTP operations (e.g. GET, POST, etc.) just like a real backend. Then use Faker to generate thousands of records worth of test data in just a few seconds.",
        url: 'https://youtu.be/48JufWTfNz4',
        totalRunningTime: '15 minutes',
        published: 'May 2020',
        thumbnail: 'img/thumbnails/youtube-thumbnail-json-server.png'
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };