import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
      this.route('new-patient');
      this.route('patientdisp', {path: '/patientdisp/:patientdisp_id'});

export default Router;
