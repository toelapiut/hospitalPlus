import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('patientdisplay');
  },
  actions: {
    submitForm(params) {
      var newPatient = this.store.createRecord('patientdisplay', params);
      newPatient.save();
      this.transitionTo('index')
    }
  }
});
