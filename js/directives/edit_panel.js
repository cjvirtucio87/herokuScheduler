app.directive('editPanel',
['JobsService', function(JobsService) {

  return {
    templateUrl: 'js/directives/edit_panel.html',
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
