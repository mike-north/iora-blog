import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  attributeBindings: ['model.id:post-id']
});