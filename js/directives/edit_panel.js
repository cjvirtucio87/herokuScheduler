app.directive('editPanel',
['JobService', 'DynoService', 'FrequencyService', 'NextDueService',
'PanelStateService',
function(JobService, DynoService, FrequencyService, NextDueService,
PanelStateService) {

  return {
    templateUrl: 'js/directives/edit_panel.html',
    restrict: 'A',
    link: function(scope) {
      scope.saveJobEdit = function() {
        scope.job.update(scope.jobEdit);
        scope.toggleEditState();
      };
      scope.toggleEditState = function() {
        scope.jobEdit = {};
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
