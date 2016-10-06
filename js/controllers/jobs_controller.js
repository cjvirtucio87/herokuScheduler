app.controller('JobsCtrl',
['$scope', 'jobs', 'JobService',
function($scope, jobs, JobService) {

  $scope.jobs = jobs;
  $scope.jobParams = {
    name: '',
    dynoSize: 'free',
    frequency: 'daily',
    lastRun: 'never',
    nextDue: Date.now,
    editState: true
  };

  $scope.addJob = function() {
    JobService.create($scope.jobParams);
    $scope.jobParams = {
      name: '',
      dynoSize: 'free',
      frequency: 'daily',
      lastRun: 'never',
      nextDue: Date.now
    };
  };

}]);
