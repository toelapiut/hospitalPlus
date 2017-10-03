import Ember from 'ember';

export default Ember.Component.extend({
  addMedication: false,
  actions: {
    drugsFormShow() {
      this.set('addMedication', true)
    },
    saveMedication() {
      var params = {
        medication: this.get('medication'),
        prescriber: this.get('prescriber'),
        prescription: this.get('prescription'),
        date: this.get('date'),
        quantity: this.get('quantity'),
          patientdisplay: this.get('patientdisplay')
      };
      this.set('addMedication', false);
      this.sendAction('saveMedication', params);
    }
  }
});
