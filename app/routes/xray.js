import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.Rsvp.hash ({
      xray: this.store.findAll('xray')
    })
  },
  actions: {
    xrayInfos(params) {
      console.log(params);
      var newResult = this.store.createRecord('xray', params)
      newResult.save();
      this.transitionTo(xray)
    }
  }
});
