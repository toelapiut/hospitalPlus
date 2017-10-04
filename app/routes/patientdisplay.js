import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('patientdisplay', params.patientdisplay_id);
  },
  actions: {
    update(patientdisplay, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          patientdisplay.set(key, params[key]);
        }
      });
      patientdisplay.save();
      this.transitionTo('index');
    }
  },
  saveMedication(params) {
    var newMedication = this.store.createRecord('medication', params);
    var patientdisplay = params.patientdisplay;
    patientdisplay.get('medications').addObject(newMedication);
    newMedication.save().then(function() {
      return patientdisplay.save();
    });
    this.transitionTo('patientdisplay', patientdisplay);
  }
});
