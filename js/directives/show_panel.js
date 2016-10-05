app.directive('showPanel',
['JobService', function(JobService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    scope: {
      jobId: '='
    },
    link: function(scope) {
      scope.jobInfo = {
        job: JobService.one(scope.jobId)
      };
    }
  };
}]);
