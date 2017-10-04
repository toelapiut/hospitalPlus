import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
      this.route('new-patient');
      this.route('patientdisplay', {path: '/patientdisplay/:patientdisplay_id'});
});

export default Router;
