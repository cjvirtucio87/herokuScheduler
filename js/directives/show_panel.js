app.directive('showPanel',
['JobService', 'PanelStateService',
function(JobService, PanelStateService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    link: function(scope) {
      scope.toggleEditState = function() {
        scope.job.editState = scope.job.toggleEditState();
      };
      // scope.$watch('job', function(newValue) {
      //   console.log(scope.job);
      // });
    }
  };
}]);
