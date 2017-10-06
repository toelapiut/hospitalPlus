import DS from 'ember-data';

export default DS.Model.extend({
  labType: DS.attr(),
  labNote: DS.attr(),
  dateRequested: DS.attr(),
  requestedBy: DS.attr(),
  patientName: DS.attr(),
  testResult: DS.attr()
});
