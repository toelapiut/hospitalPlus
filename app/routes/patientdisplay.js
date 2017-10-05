import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      medications: this.store.findAll('medication')
    });
  },
  actions: {
    saveMedication3(params) {
      var newMedication = this.store.createRecord('medication', params);
      newMedication.save();
      this.transitionTo('patientdisplay');
    }
  }
});
