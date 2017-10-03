import Ember from 'ember';

export default Ember.Component.extend({
  showHideForm: false,
  actions: {
    showForm() {
      this.set('showHideForm', true)
    },
    hidePatientForm() {
      this.set('showHideForm', false)
    },
    submitfrom() {
      var params = {
        checkIntime: this.get('checkIntime'),
        dob: this.get('dob'),
        emergencyNo: this.get('emergencyNo'),
        examiner: this.get('emergencyNo'),
        firstName: this.get('firstName'),
        followUp: this.get('followUp'),
        lastName: this.get('lastName'),
        location: this.get('location'),
        phoneNo: this.get('phoneNo'),
        sex: this.get('sex'),
        status: this.get('status')
      };
      this.set('showHideForm', false);
      this.sendAction("submitform", params)
    }
  }
});
