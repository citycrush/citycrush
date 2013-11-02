Citycrush.ObjectivesEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('objectives', model.objectives_id);
  }
});

