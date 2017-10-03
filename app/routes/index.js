import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      patientdisplays: this.store.findAll('patientdisplay'),
      medications: this.store.findAll('medication')
    });
  },
  actions: {
    showForm(params) {
      var newPatient = this.store.createRecord('patientdisplay', params);
      newPatient.save();
      this.transitionTo('index');
    },
  }
});
