import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    labInfos() {
      var params = {
        labTypes: this.get('labType'),
        labNotes: this.get('labNote'),
        dateRequested: this.get('dateRequested'),
        requestedBy: this.get('requestedBy'),
        patientNames: this.get('patientName'),
        testResults: this.get('testResult')
      };
      this.sendAction('labInfos', params);
    }
  }
});
