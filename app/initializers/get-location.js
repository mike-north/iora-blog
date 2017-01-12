export function initialize(app) {

  // if (typeof FastBoot === 'undefined') {
  //   let geo = navigator.geolocation;
  //   app.deferReadiness();
  //   geo.getCurrentPosition((pos) => {
  //     let pt = pos.coords;
  //     let loc = {
  //       lat: pt.latitude,
  //       lng: pt.longitude
  //     };
  //     app.register('data:location', loc, {
  //       singleton: true,
  //       instantiate: false
  //     });
  //     // app.inject('controller', 'location', 'data:location');

  //     app.advanceReadiness();
  //   });
  // }
}

export default {
  name: 'get-location',
  initialize
};