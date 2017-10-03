import DS from 'ember-data';

export default DS.Model.extend({
  medication: DS.attr(),
  prescriber: DS.attr(),
  prescription: DS.attr(),
  date: DS.attr(),
  quantityRequested: DS.attr()
});
