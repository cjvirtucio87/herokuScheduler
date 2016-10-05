app.factory('FrequencyService', function() {

  FREQUENCY_CHOICES = [
    'hourly',
    'daily',
    'weekly'
  ];

  var FrequencyService = {};

  FrequencyService.getChoices = function() {

    // We want to avoid pass-by-reference issues in this case.
    return angular.copy(FREQUENCY_CHOICES,[]);

  };

  return FrequencyService;

});
