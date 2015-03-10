import Ember from 'ember';

var EntriesRoute =  Ember.Route.extend({
  model: function() {
    return this.store.find('entry');
  }
});

export default EntriesRoute;
