import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('patientdisp', params.patientdisp_id);
  },
  actions: {
    update(patientdisp, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          patientdisp.set(key, params[key]);
        }
      });
      patientdisp.save();
      this.transitionTo('index');
    }
  },
  saveMedication(params) {
    var newMedication = this.store.createRecord('medication', params);
    var patientdisp = params.patientdisp;
    patientdisp.get('medications').addObject(newMedication);
    newMedication.save().then(function() {
      return patientdisp.save();
    });
    this.transitionTo('patientdisp', patientdisp);
  }
});
