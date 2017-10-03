import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('patientdisp')
  },
  actions:{
    showForm(params){
    var newPatient =  this.store.createRecord('patientdisp',params);
      newPatient.save();
      this.transitionTo('index');
    }
  
