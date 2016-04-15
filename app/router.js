import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('about');
  this.route('contact');
  this.route('books', function() {
    this.route('new');
    this.route('list');
  });
});

export default Router;
