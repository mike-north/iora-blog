import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-tile', 'post'],
  draftComment: stateFor('post-info', 'model')
});