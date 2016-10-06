app.directive('editPanel',
['JobService', 'DynoService', 'FrequencyService', 'NextDueService',
function(JobService, DynoService, FrequencyService, NextDueService) {

  return {
    templateUrl: 'js/directives/edit_panel.html',
    restrict: 'A',
    link: function(scope) {
      scope.saveJobEdit = function() {
        scope.job.update(scope.jobEdit);
        scope.jobEdit = {};
        scope.toggleEditState();
        scope.toggleNewJobState();
      };
      scope.cancelEdit = function() {
        // Destroy, if not yet persisted.
        if (!scope.job.persisted) {
          scope.job.destroy();
        } else {
          scope.toggleEditState();
        }
        scope.toggleNewJobState();
      };
      scope.toggleEditState = function() {
        scope.job.editState = scope.job.toggleEditState();
      };
      scope.dynoSizeChoices = DynoService.getChoices();
      scope.frequencyChoices = FrequencyService.getChoices();
      // We want the choices in next run to change based on freqChoice.
      // IF user selects daily THEN choice is the HOUR of next DAY.
      // ELIF user selects hourly THEN choice is the TEN MIN INTERVAL of next HOUR.
      scope.nextDueChoices = NextDueService.getChoices(
        scope.jobEdit.frequency,
        'Wed Nov 30 2016 05:30:00 GMT-0800 (PST)'
      );
      scope.$watch('jobEdit.frequency', function(newValue) {
        scope.nextDueChoices = NextDueService.getChoices(
          newValue,
          'Wed Nov 30 2016 05:30:00 GMT-0800 (PST)'
        );
      });
    }
  };

}]);
