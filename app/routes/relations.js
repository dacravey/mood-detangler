import Ember from 'ember';

var RelationsRoute =  Ember.Route.extend({
  model: function() {
    return this.store.find('entry');
  }
});

export default RelationsRoute;
