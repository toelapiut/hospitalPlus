import Ember from 'ember';

export default Ember.Component.extend({
<<<<<<< HEAD
  updatePatient: false,
  actions:{
    updatePatient() {
      this.set('updatePatient', true);
=======
  updatePatient: true,
  actions: {
    updatePatient() {
      this.set('updatePatient', false);
>>>>>>> cf35ba17f4040370673a12829461c2fe9215bff6
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
      this.set('updatePatient', true);
      this.sendAction('update', patientdisplay, params);
    }
  }
});
