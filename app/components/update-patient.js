import Ember from 'ember';

export default Ember.Component.extend({
  updatePatient: true,
  actions: {
    updatePatient() {
      this.set('updatePatient', false);
    },
    update(patientdisplay) {
      var params = {
        status: this.get('status'),
        emergencyNo: this.get('emergencyNo'),
        phoneNo: this.get('phoneNo'),
        location: this.get('location'),
        examiner: this.get('examiner'),
        followUp: this.get('followUp')
      };
      this.sendAction('update', patientdisplay, params);
    }
  }
});
