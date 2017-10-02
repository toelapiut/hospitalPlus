import DS from 'ember-data';

export default DS.Model.extend({
  dateRequest: DS.attr(),
  labType: DS.attr(),
  labNotes: DS.attr()
});
