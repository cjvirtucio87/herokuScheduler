app.directive('jobPanel', ['JobService', function(JobService) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/job_panel.html',
    scope: {
      jobId: '='
    },
    link: function(scope) {
      // Maintain data-binding without having to pass down a bulky object.
      scope.jobInfo = {
        job: JobService.one(scope.jobId)
      };
      scope.editState = false;
      scope.toggleEditState = function() {
        scope.editState = !scope.editState;
      };
    }
  };
}]);
