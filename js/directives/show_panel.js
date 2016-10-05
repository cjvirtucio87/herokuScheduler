app.directive('showPanel',
['JobService', 'PanelStateService',
function(JobService, PanelStateService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    scope: {
      job: '='
    },
    link: function(scope) {
      scope.jobInfo = {
        job: scope.job
      };
      scope.toggleEditState = function() {
        scope.job.editState = scope.job.toggleEditState();
      };
      scope.$watch('job', function(newValue) {
        scope.jobInfo.job = newValue;
      });
    }
  };
}]);
