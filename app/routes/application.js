import Ember from 'ember';
import postsData from '../utils/posts-data';
const { Route } = Ember;

export default Route.extend({
  model() {
    return postsData;
  }
});