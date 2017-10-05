import Ember from 'ember';

export default Ember.Component.extend({
  showHideForm: false,
  sex: null,
  status: null,

  actions: {
    showForm() {
      this.set('showHideForm', true)
    },
    hidePatientForm() {
      this.set('showHideForm', false)
    },
    setSelection: function(selected) {
      this.set('sex', selected)
      console.log(this.get('sex'))
    },

    setSelection2: function(selected2) {
      this.set('status', selected2)
      console.log(this.get('status'))
    },

    submitForm() {
      var params = {
        checkIntime: this.get('checkIntime'),
        checkOuttime: this.get('checkOuttime'),
        patientsId: this.get("patientsId"),
        dob: this.get('dob'),
        emergencyNo: this.get('emergencyNo'),
        examiner: this.get('examiner'),
        firstName: this.get('firstName'),
        followUp: this.get('followUp'),
        lastName: this.get('lastName'),
        location: this.get('location'),
        phoneNo: this.get('phoneNo'),
        sex: this.get('sex'),
        status: this.get('status')
      };
      console.log(params)
      this.set('showHideForm', false);
      this.sendAction("submitForm", params)
    }
  }
});
