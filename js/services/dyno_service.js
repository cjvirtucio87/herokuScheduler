app.factory('DynoService', function() {

  DYNO_CHOICES = [
    'free',
    'hobby',
    'standard-1x',
    'standard-2x',
    'performance-m',
    'performance-l'
  ];

  var DynoService = {};

  DynoService.getChoices = function() {

    // We want to avoid pass-by-reference issues in this case.
    return angular.copy(DYNO_CHOICES,[]);

  };

  return DynoService;

});
