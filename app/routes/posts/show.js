import Ember from 'ember';
import { timeout, task } from 'ember-concurrency';

const { Route } = Ember;

export default Route.extend({
  model({ id }) {
    return this.get('store').findRecord('post', id);
  },
  updateComment: task(function*(comment) {
    this.set('updateComment.isEditing', false);
    this.set('updateComment.isSavePending', true);
    // can cancel here
    yield timeout(3000);
    // can't cancel here
    this.set('updateComment.isSavePending', false);
    yield comment.save();
  }),
  setupController(controller) {
    this._super(...arguments);
    controller.set('updateComment', this.get('updateComment'));
  }
});