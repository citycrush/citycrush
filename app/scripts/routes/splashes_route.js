Citycrush.SplashesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('splash');
  }
});

