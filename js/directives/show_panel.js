app.directive('showPanel',
['JobService', 'PanelStateService',
function(JobService, PanelStateService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    scope: {
      jobId: '='
    },
    link: function(scope) {
      scope.states = PanelStateService.getStates();
      scope.jobInfo = {
        job: JobService.one(scope.jobId)
      };
      scope.toggleEditState = PanelStateService.toggleEditState;
    }
  };
}]);
