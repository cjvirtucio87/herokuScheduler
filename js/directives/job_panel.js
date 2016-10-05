app.directive('jobPanel',
['JobService', 'PanelStateService',
function(JobService, PanelStateService) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/job_panel.html',
    scope: {
      job: '='
    },
    link: function(scope) {
      // scope.$watch('job', function(newValue) {
      //   console.log(newValue);
      // });
    }
  };
}]);
