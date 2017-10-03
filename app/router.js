import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patientdisp', {path: 'patientdisp/:patientdisp_id'});
  this.route('new-patient');

export default Router;
