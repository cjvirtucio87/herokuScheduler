app.directive('jobPanel', ['JobsService', function(JobsService) {
  return {
    templateUrl: 'js/directives/job_panel.html',
    scope: {
      job: '='
    }
  };
}]);
