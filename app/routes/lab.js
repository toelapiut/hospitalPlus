import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return Ember.RSVP.hash({
      labs: this.store.findAll('lab')
    })
  },
  actions: {
    labInfos(params) {
      console.log(params);
      var newResult = this.store.createRecord('lab', params);
      newResult.save();
      this.transitionTo('lab');
    }
  }
});
