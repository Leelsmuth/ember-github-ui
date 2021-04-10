import EmberRouter from '@ember/routing/router';
import config from 'github-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // LIST OF ORGS
  this.route('orgs'); // orgs

  // INDIVIDUAL ORG
  this.route('org', { path: 'org/:id' }, function () { // org/32

    // LIST OF REPOS
    this.route('repos');

    // INDIVIDUAL REPO
    // org/jquery/jquery-ui
    this.route('repo', { path: ':repoid' }, function () {
      this.route('contributors');
      this.route('issues');
    });
  });
  this.route('notfound', { path: '*path' });
});
