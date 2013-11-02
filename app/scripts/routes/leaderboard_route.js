Citycrush.LeaderboardRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('leaderboard', model.leaderboard_id);
  }
});

