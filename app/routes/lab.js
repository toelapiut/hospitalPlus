import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    labInfos(params) {
      var newResult = this.store.createRecord('labInfos', params);
      newResult.save();
      this.transitionTo('lab');
    }
  }
});
