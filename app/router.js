import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('entries', {path: '/'});
  this.resource('add-entry');
});

export default Router;
