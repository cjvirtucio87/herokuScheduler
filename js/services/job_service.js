// Single source of truth.
app.factory('JobService', ['$http', '_', '$filter',
function($http,_) {

  BASE_URI = 'js/data';

  var JobService = {};

  var _jobs = {};

  var _id;

  function _buildURL(resource) {
    return BASE_URI + '/' + resource + '.json';
  }

  function _logErrors(reason) {
    console.log("ERROR: " + reason);
  }

  function _extend(job) {
    job.destroy = function() {
      delete _jobs[job.id];
    };
    job.update = function(newAttrs) {
      var updateThis = _.bind(function(v,k) {
        this[k] = v;
      }, this);
      _.forEach(newAttrs, updateThis);
      // Persist, if not yet persisted, as in a new job.
      if (!this.persisted) {
        this.persisted = true;
      }
    };
    // New jobs should begin in an editState.
    job.editState = job.editState || false;
    // Jobs from the API should have persisted set to true.
    if (!_.has(job, 'persisted')) {
      job.persisted = true;
    }
    job.toggleEditState = function() {
      job.editState = !job.editState;
      return job.editState;
    };
    return job;
  }

  function _populateJobs(response) {
    // Lodash mapValues returns an object.
    var newJobs = _.mapValues(response.data, function(job) {
      return _extend(job);
    });
    // Using angular.copy so as not to sever data binding.
    return angular.copy(newJobs,_jobs);
  }

  function _pluck(id) {
    return function() {
      return _jobs[id.toString()];
    };
  }

  // Helper to grab new id.
  function _nextId () {
    if (!_id) {
      if (_.isEmpty(_jobs)) {
        // Initialize.
        _id = 1;
        return _id;
      } else {
        // Max among existing ids.
        _id = _.max(Object.keys(_jobs));
      }
      return _id + 1;
    }
    return _id + 1;
  }

  JobService.all = function() {
    // Limit API calls.
    if (_.isEmpty(_jobs)) {
      return $http.get(_buildURL('jobs'))
        .then(_populateJobs)
        .catch(_logErrors);
    } else {
      return _jobs;
    }
  };

  JobService.one = function(id) {
    if (_.isEmpty(_jobs)) {
      return $http.get(_buildURL('jobs'))
        .then(_populateJobs)
        .then(_pluck(id))
        .catch(_logErrors);
    } else {
      return _jobs[id.toString()];
    }
  };

  JobService.create = function(jobParams) {
    var newJob = angular.copy(jobParams,{});
    var nextId = _nextId();
    newJob.id = nextId;
    _jobs[nextId.toString()] = newJob;
    _extend(newJob);
    _id++;
    return newJob;
  };

  return JobService;

}]);
