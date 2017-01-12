import Ember from 'ember';

const { Controller, computed, getOwner } = Ember;

export default Controller.extend({
  loc: computed(function() {
    return getOwner(this).lookup('data:location');
  }),
  req: computed(function() {
    return getOwner(this).lookup('data:request');
  })
});