import Ember from 'ember';

export default Ember.Route.extend({
  dob: DS.attr(),
  emergencyNo: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  phoneNo: DS.attr(),
  sex: DS.attr(),
  status: DS.attr()
});
