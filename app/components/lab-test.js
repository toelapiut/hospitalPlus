import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    labInfos() {
      var params = {
        labTypes: this.get('labType'),
        labNotes: this.get('labNotes'),
        dateRequested: this.get('dateRequested'),
        requestedBy: this.get('requestedBy'),
        patientNames: this.get('patientNames'),
        testResults: this.get('testResults')
      };
      this.sendAction('labInfos', params);
    }
  }
});
