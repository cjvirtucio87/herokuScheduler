app.factory('NextDueService', function() {

  // This is where it gets a little tricky.
  // First, Service needs to know what freq choice is made.
  // Second, Service needs to know what range of choices are available.

  var NextDueService = {};

  function _nextInterval(minutes) {
    return function (dateObj) {
      return new Date(dateObj.getTime() + minutes * 60000);
    };
  }

  var _nextThirtyMinutes = _nextInterval(30);
  var _nextTenMinutes = _nextInterval(10);

  function _makeRange (numOfItems, intervalFn) {
    return function (lastRun) {
      var lastRunObj = new Date(lastRun);
      var output = [];
      for (var i = 0; i < numOfItems; i++) {
        lastRunObj = intervalFn(lastRunObj);
        output.push(lastRunObj);
      }
      return output;
    };
  }

  // There are 24 60 min intervals in a day.
  // There are 2 30 min intervals in a day.
  // (24 * 2) = 48 30 min intervals in a day.
  var _makeDailyRange = _makeRange(48, _nextThirtyMinutes);
  var _makeHourlyRange = _makeRange(6, _nextTenMinutes);

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
