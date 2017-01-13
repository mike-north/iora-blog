import DS from 'ember-data';
import config from '../config/environment';

const { DS: { host, namespace } } = config;
const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  host,
  namespace,
  urlForCreateRecord(modelName, snapshot) {
    switch (modelName) {
      case 'comment':
        let postId = snapshot.belongsTo('post').id;
        return `${this.urlForFindRecord(postId, 'post', snapshot)}/comment`;
      default:
        return this._super(...arguments);
    }
  }
});