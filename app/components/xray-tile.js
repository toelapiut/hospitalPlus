import Ember from 'ember';

export default Ember.Component.extend({
  addNewNote: false,
  actions: {
    noteFormShow(){
      this.set('addNewNote', true);
    },

    saveNote1() {
      var params = {
        notes: this.get('notes'),
      };
      this.set('addNewnote', false);
      this.sendAction('saveNote2', params);
    }
  }
});
