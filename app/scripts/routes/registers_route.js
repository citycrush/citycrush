Citycrush.RegistersRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('register');
  }
});

