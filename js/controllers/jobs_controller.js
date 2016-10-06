app.controller('JobsCtrl',
['$scope', 'jobs', 'JobService',
function($scope, jobs, JobService) {

  $scope.newJobState = {
    state: false
  };

  $scope.jobs = jobs;
  $scope.jobParams = {
    name: '',
    dynoSize: 'free',
    frequency: 'daily',
    lastRun: 'never',
    nextDue: Date.now,
    editState: true,
    persisted: false
  };

  $scope.addJob = function() {
    $scope.newJobState.state = true;
    JobService.create($scope.jobParams);
    $scope.jobParams = {
      name: '',
      dynoSize: 'free',
      frequency: 'daily',
      lastRun: 'never',
      nextDue: Date.now,
      editState: true,
      persisted: false
    };
  };

  $scope.$on('toggledNewJobState', function() {
    $scope.newJobState.state = false;
  });

}]);
