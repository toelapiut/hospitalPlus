import DS from 'ember-data';

export default DS.Model.extend({
  labType: DS.attr(),
  labNotes: DS.attr()
});
