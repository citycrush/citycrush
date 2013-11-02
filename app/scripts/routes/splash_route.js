Citycrush.SplashRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('splash', model.splash_id);
  }
});

