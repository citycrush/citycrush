Citycrush.LoginEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('login', model.login_id);
  }
});

