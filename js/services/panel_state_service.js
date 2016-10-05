app.factory('PanelStateService', function() {

  var PanelStateService = {};

  var _states = {
    editState: false
  };

  PanelStateService.toggleEditState = function() {
    _states.editState = !_states.editState;
  };

  PanelStateService.getStates = function() {
    return _states;
  };

  return PanelStateService;

});
