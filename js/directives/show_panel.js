app.directive('showPanel',
['JobService', 'PanelStateService',
function(JobService, PanelStateService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    scope: true,
    link: function(scope) {
      scope.states = PanelStateService.getStates(scope.jobId);
      scope.toggleEditState = PanelStateService.toggleEditState(scope.jobId);
    }
  };
}]);
