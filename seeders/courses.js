module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Course', [{
        title: 'Getting Cruddy with MongoDB',
        description: '',
        publisher: 'maddevskilz.com',
        released: 'Estimated: June, 2020',
        url: 'https://maddevskilz.com/courses/getting-cruddy-with-mongo',
        repositoryUrl: ''
      },{
         title: 'Building RESTful APIs with Flask',
         description: '',
         publisher: 'LinkedLearning / Lynda.com',
         released: '2019',
         url: 'https://www.linkedin.com/learning/building-restful-apis-with-flask',
         repositoryUrl: 'https://github.com/brucevanhorn2/planetary-api-python-exercise-files'
      },{
          title: 'Hands on Development with React and Bootstrap',
          description: '',
          publisher: 'Packt / Udemy',
          released: '2019',
          url: 'https://www.packtpub.com/web-development/hands-application-development-react-and-bootstrap-video',
          repositoryUrl: 'https://github.com/brucevanhorn2/reactstrap-course'
      }, {
          title: 'C# Essential Training Part 1: Syntax and Object Oriented Programming',
          description: '',
          publisher: 'LinkedIn Learning / Lynda.com',
          released: '2018',
          url: 'https://www.linkedin.com/learning/c-sharp-essential-training-1-syntax-and-object-oriented-programming',
          repositoryUrl: 'https://github.com/brucevanhorn2/CSharpEssentialTrainingPart1'
      },{
          title: 'C# Essential Training Part 2: Flow Control, Arrays, and Exception Handling',
          description: '',
          publisher: 'LinkedIn Learning / Lynda.com',
          released: '2018',
          url: 'https://www.linkedin.com/learning/c-sharp-essential-training-2-flow-control-arrays-and-exception-handling',
          reponsitoryUrl: 'https://github.com/brucevanhorn2/CSharpEssentialTrainingPart2Exercises'
      }, {
          title:  "Visual Studio for Mac",
          description: '',
          publisher: 'LinkedIn Learning / Lynda.com',
          released: '2018',
          url: 'https://www.linkedin.com/learning/visual-studio-for-mac/using-visual-studio-on-a-mac',
          reponsitoryUrl: 'https://github.com/brucevanhorn2/VisualStudioForMacCourseApp'
      }, {
          title: 'Learning Python with PyCharm',
          description: '',
          publisher: 'LinkedIn Learning / Lynda.com',
          released: '2017',
          url: 'https://www.linkedin.com/learning/learning-python-with-pycharm',
          repositoryUrl: 'https://github.com/brucevanhorn2/PycharmCourseFiles'
      }, {
          title: 'Network Gaming with Unity 5',
          description: '',
          publisher: 'LinedIn Learning / Lynda.com',
          released: '2017',
          url: 'https://www.linkedin.com/learning/unity-5-network-gaming',
          repositoryUrl: 'None'
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };