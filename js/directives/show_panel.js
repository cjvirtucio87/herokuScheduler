app.directive('showPanel',
['JobsService', function(JobsService) {
  return {
    templateUrl: 'js/directives/show_panel.html',
    restrict: 'A',
    scope: {
      jobId: '='
    },
    link: function(scope) {
      scope.jobInfo = {
        job: JobsService.one(scope.jobId)
      };
    }
  };
}]);
