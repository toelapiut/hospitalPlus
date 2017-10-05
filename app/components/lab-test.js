import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    labInfo() {
      var params = {
        labType: this.get('labType'),
        labNotes: this.get('labNotes')
      };
      this.sendAction('labInfoz', params);
    }
  }
});
