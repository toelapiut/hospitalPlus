import DS from 'ember-data';

export default DS.Model.extend({
  dateRequested: DS.attr(),
  requestedBy: DS.attr(),
  patientNames: DS.attr(),
  xrayType: DS.attr(),
  xrayNotes: DS.attr()
});
