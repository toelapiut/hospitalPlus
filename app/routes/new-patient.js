import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('patientInfo');
  },
  actions: {
    submitForm(params) {
      var newPatient = this.store.createRecord('patientInfo', params);
      newPatient.save();
      this.transitionTo('index')
    }
  }
});
