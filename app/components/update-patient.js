import Ember from 'ember';

export default Ember.Component.extend({
  addMedication: false,
  actions: {
    updatePatient() {
      this.set('addMedication', true);
    },
    update(patientInfo) {
      var params = {
        name: this.get('name'),
        surname: this.get('surname'),
        sex: this.get('sex'),
        dob: this.get('dob'),
        status: this.get('status')
      };
      this.set('updatePatient', false);
      this.sendAction('update', patientInfo, params)
    }
  }
});
