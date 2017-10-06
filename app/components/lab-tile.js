import Ember from 'ember';

export default Ember.Component.extend({
	addLabTile: false,
  actions: {
    labFormShow() {
      this.set('addLabTile', true);
    }
  }
});
