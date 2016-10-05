app.directive('jobPanel', ['JobsService', function(JobsService) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/job_panel.html',
    scope: {
      jobId: '='
    },
    link: function(scope) {
      // Maintain data-binding without having to pass down a bulky object.
      scope.jobInfo = {
        job: JobsService.one(scope.jobId)
      };
      scope.editState = false;
      scope.toggleEditState = function() {
        scope.editState = !scope.editState;
      };
    }
  };
}]);
