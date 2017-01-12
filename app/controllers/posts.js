import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Controller.extend({
  _triggerRefresh() {
    this.send('refreshRoute');
  },
  actions: {
    searchUpdated(value) {
      this.set('search', value);
      debounce(this, '_triggerRefresh', 200);
    }
  }
});