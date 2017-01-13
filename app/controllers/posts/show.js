import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    saveComment(post, body) {
      return this.get('store').createRecord('comment', {
        post,
        body
      }).save().then(() => {
        let draftMap = stateFor('post-info');
        let draft = draftMap.get(post);
        if (draft) {
          draft.set('body', '');
        }
        return post;
      });
    }
  }
});