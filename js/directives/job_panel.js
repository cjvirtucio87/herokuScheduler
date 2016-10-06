app.directive('jobPanel',
['JobService',
function(JobService) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/job_panel.html',
    scope: {
      job: '='
    },
    link: function(scope) {
      // For un-hiding the add job button.
      scope.toggleNewJobState = function() {
        scope.$emit('toggledNewJobState');
      };
    }
  };
}]);
