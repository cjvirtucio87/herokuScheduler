app.directive('showPanel',
['JobService',
function(JobService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    link: function(scope) {
      scope.toggleEditState = function() {
        scope.job.editState = scope.job.toggleEditState();
      };
      scope.removeJob = function () {
        scope.job.destroy();
      };
    }
  };
}]);
