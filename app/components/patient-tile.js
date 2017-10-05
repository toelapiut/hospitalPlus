import Ember from 'ember';

export default Ember.Component.extend({
  checkInclick: false,
  updatePatient: false,
  actions: {
    checkIn() {
      this.set("checkInclick",true)
    },
    checkOut() {
      this.set("checkInclick",false)
    },
    update(patientdisplay, params) {
      this.sendAction('update', patientdisplay, params);
    },
  }
});
