Citycrush.LeaderboardEditController = Ember.ObjectController.extend({
  save: function(){
    // we're cheating here that there's no commit()
    // but the UI element is already bound to the model
    this.transitionToRoute('leaderboard',this.get('model'));
  }
});

