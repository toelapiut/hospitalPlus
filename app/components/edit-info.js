import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateForm(patientInfo) {
      var params = {
        checkIntime: this.get('checkIntime'),
        emergencyNo: this.get('emergencyNo'),
        examiner: this.get('emergencyNo'),
        followUp: this.get('followUp'),
        location: this.get('location'),
        status: this.get('status')
      };
      this.sendAction("updateForm", patientInfo, params)
    }
  }
});
