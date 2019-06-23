import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('everyone');
  this.route('my-skills', { path: '/my-skills/:id'});
});

export default Router;
