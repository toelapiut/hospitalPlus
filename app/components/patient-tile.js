import Ember from 'ember';

export default Ember.Component.extend({
  checkInclick: false,
  actions: {
    checkIn() {
      this.set("checkInclick",true)
    },
    checkOut() {
      this.set("checkInclick",false)
    }
  }
});
