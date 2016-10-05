app.controller('JobsCtrl',
['$scope', 'jobs', 'JobsService',
function($scope, jobs, JobsService) {

  $scope.jobs = jobs;

}]);
