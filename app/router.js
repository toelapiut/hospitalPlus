import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('xray');
  this.route('lab');
  this.route('new-patient');
  this.route('patientdisplay');
  this.route('lab-test');
});

export default Router;
