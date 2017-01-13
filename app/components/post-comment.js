import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  isSavePending: false,
  deleteComment: task(function*() {
    yield this.get('model').destroyRecord();
  }),
  actions: {
    cancelSave() {
      this.get('updateComment').cancelAll();
      this.set('updateComment.isSavePending', false);
      this.get('model').rollbackAttributes();
    }
  }
});