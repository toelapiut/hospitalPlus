import Ember from 'ember';

export default Ember.Component.extend({
  updatePatient: false,
  actions: {
    updatePatient() {
      this.set('updatePatient', true);
    },
    update(patientdisplay) {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastname'),
        sex: this.get('sex'),
        dob: this.get('dob'),
        status: this.get('status'),
        emergencyNo: this.get('emergencyNo'),
        phoneNo: this.get('phoneNo'),
        location: this.get('location'),
        checkIntimethis: this.get('checkIntimethis'),
        examiner: this.get('examiner'),
        followUp: this.get('followUp')
      };
      this.set('updatePatient', false);
      this.sendAction('update', patientdisplay, params)
    }
  }
});
