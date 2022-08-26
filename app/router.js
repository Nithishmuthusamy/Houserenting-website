import EmberRouter from '@ember/routing/router';
import config from 'houserental/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('addlist');

  this.route('index', { path: '/home' }, function () {
    this.route('details', { path: '/details/:details_id' });
    this.route('book', { path: '/book/:book_id' });
  });
  this.route('bookings');
  this.route('not-found', { path: '/*path' });
});
