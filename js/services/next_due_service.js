app.factory('NextDueService', function() {

  // This is where it gets a little tricky.
  // First, Service needs to know what freq choice is made.
  // Second, Service needs to know what range of choices are available.

  var NextDueService = {};

  function _nextThirtyMinutes (dateObj) {
    return new Date(dateObj.getTime() + 30 * 60000);
  }

  function _makeDailyRange (lastRun) {
    var dateLastRun = new Date(lastRun);
    // There are 24 60 min intervals in a day.
    // There are 2 30 min intervals in a day.
    // (24 * 2) = 48 30 min intervals in a day.
    var dates = [];
    for (var i = 0; i < 49; i++) {
      dateLastRun = _nextThirtyMinutes(dateLastRun);
      dates.push(dateLastRun);
    }
    return dates;
  }

  NextDueService.getChoices = function (freqChoice, lastRun) {
    switch (freqChoice) {
      case 'daily':
        return _makeDailyRange(lastRun);
      case 'hourly':
        return _makeHourlyRange(lastRun);
    }
  };

  return NextDueService;
});
