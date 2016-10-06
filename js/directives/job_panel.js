app.directive('jobPanel',
['JobService', 'PanelStateService',
function(JobService, PanelStateService) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/job_panel.html',
    scope: {
      job: '='
    },
  };
}]);
