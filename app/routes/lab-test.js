export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      labs: this.store.findAll('lab')
    })
  },
  actions: {
    labInfo(params) {
      // console.log(params);
      var newResult = this.store.createRecord('labinfos', params);
      newResult.save();
      this.transitionTo('lab');
    }
  }
});