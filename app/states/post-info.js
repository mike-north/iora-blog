/* eslint ember-suave/no-direct-property-access:"off" */
import Ember from 'ember';

const MyState = Ember.Object.extend();

MyState.reopenClass({
  clear(stateObject) {
    stateObject.set('body', '');
  }
});

export default MyState;

// // reopenClass
// MyStateObject.initialState;

// // reopen
// MyStateObject.create().initialState();