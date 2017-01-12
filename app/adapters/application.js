import DS from 'ember-data';
import config from '../config/environment';

const { DS: { host, namespace } } = config;
const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  host,
  namespace
});