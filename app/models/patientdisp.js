import DS from 'ember-data';

export default DS.Model.extend({
  dob: DS.attr(),
  emergencyNo: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  phoneNo: DS.attr(),
  sex: DS.attr(),
  status: DS.attr(),
  location: DS.attr(),
  checkIntimethis: DS.attr(),
  examiner: DS.attr(),
  followUp: DS.attr()
});
