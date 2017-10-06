import Ember from 'ember';
export default Ember.Component.extend({
checkInclick: false,
actions: {
checkIn() {
this.set("checkInclick",false)
}
},
checkOut() {
this.set("checkInclick",true)
}
});