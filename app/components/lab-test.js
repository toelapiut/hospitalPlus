import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    labInfos() {
      var params = {
        labType: this.get('labType'),
        labNote: this.get('labNote'),
        dateRequested: this.get('dateRequested'),
        requestedBy: this.get('requestedBy'),
        patientName: this.get('patientName'),
        testResult: this.get('testResult')
      }
     this.sendAction('labInfos',params)
    }
  }
});
