export function initialize(app) {
  // Get the shoebox, and the shoebox store we want
  let fastbootSvc = app.lookup('service:fastboot');
  let shoebox = fastbootSvc.get('shoebox');
  let shoeboxStore = shoebox.retrieve('request-data');

  let userAgent = null;

  if (fastbootSvc.get('isFastBoot')) {
    // ------ SERVER SIDE RENDERING -----//
    if (!shoeboxStore) { // Lazily create the store
      shoeboxStore = {};
      shoebox.put('request-data', shoeboxStore);
    }
    userAgent = fastbootSvc.get('request.headers.headers.user-agent')[0];
    shoeboxStore['user-agent'] = userAgent;
  } else {
    // ------ CLIENT SIDE RENDERING -----//
    userAgent = shoeboxStore ? shoeboxStore['user-agent'] : '';
  }
  app.register('data:request', { 'user-agent': userAgent }, { instantiate: false, singleton: true });
}

export default {
  name: 'request-headers',
  initialize
};