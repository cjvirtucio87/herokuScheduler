app.directive('editPanel',
['JobService', 'DynoService', 'FrequencyService',
function(JobService, DynoService, FrequencyService) {

  return {
    templateUrl: 'js/directives/edit_panel.html',
    restrict: 'A',
    scope: {
      jobId: '='
    },
    link: function(scope) {
      scope.jobInfo = {
        job: JobService.one(scope.jobId)
      };
      scope.dynoSizeChoices = DynoService.getChoices();
      scope.frequencyChoices = FrequencyService.getChoices();
    }
  };

}]);
