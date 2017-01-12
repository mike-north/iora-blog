import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      as: 's'
    }
  },
  actions: {
    refreshRoute() {
      this.refresh();
    }
  },
  model({ search }) {
    if (!search) {
      return this.get('store').findAll('post');
    } else {
      return this.get('store').query('post', {
        search
      });
    }
  }
});