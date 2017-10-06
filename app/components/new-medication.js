import Ember from 'ember';

export default Ember.Component.extend({
  addMedication: false,
  actions: {
    drugsFormShow() {
      this.set('addMedication', true)
    },
    saveMedication1() {
      var params = {
        medication: this.get('medication'),
        prescriber: this.get('prescriber'),
        prescription: this.get('prescription'),
        date: this.get('date'),
        quantityRequested: this.get('quantityRequested')
      };
      this.set('addMedication', false);
      this.sendAction('saveMedication2', params);
    }
  }
});
