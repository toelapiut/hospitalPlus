import DS from 'ember-data';

export default DS.Model.extend({
  labType: DS.attr(),
  labNotes: DS.attr(),
  dateRequested: DS.attr(),
  requestedBy: DS.attr(),
  patientNames: DS.attr(),
  testResults: DS.attr()
});
