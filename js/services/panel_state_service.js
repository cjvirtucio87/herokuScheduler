app.factory('PanelStateService', function() {

  var PanelStateService = {};

  var _states = {};

  PanelStateService.toggleEditState = function(id) {
    return function () {
      _states[id].editState = !_states[id].editState;
    };
  };

  PanelStateService.getStates = function(id) {
    if (!_states[id]) {
      _states[id] = {};
      _states[id].editState = false;
    }
    return _states;
  };

  return PanelStateService;

});
