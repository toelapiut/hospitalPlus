import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    xrayInfos() {
      var params = {
        dateRequested: this.get('dateRequested'),
        requestedBy: this.get('requestedBy'),
        patientNames: this.get('patientNames'),
        xrayType: this.get('xrayType'),
        xrayNotes:this.get ('xrayNotes')
      };
      this.sendAction('labInfos', params);
    }
  }
});
