app.controller('JobsCtrl',
['$scope', 'jobs', 'JobService',
function($scope, jobs, JobService) {

  $scope.jobs = jobs;
  
}]);
