var app = angular.module('herokuClone', ['ui.router']);

app.run(function($rootScope) {

  // Error handling. UI Router has tendency to fail silently.
  $rootScope.$on('$stateChangeError', console.log.bind(console));

});


// Binding lodash to the global scope.
app.factory('_', ['$window', function($window) {

  return $window._;

}]);

app.config(function($stateProvider, $urlRouterProvider) {

  // Set root as default.
  $urlRouterProvider.otherwise('/');

  // Separation of concerns.
  $stateProvider
    .state('jobs', {
      abstract: true,
    })
    .state('jobs.index', {
      url: '/',
      views: {
        'index@': {
          templateUrl: 'js/templates/index.html',
          controller: 'JobsCtrl'
        }
      },
      resolve: {
        jobs: ['JobService', function(JobService) {
          return JobService.all();
        }]
      }
    });
});
