Citycrush.RegisterRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('register', model.register_id);
  }
});

