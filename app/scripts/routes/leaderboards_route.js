Citycrush.LeaderboardsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('leaderboard');
  }
});

