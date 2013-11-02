(function() {

var Citycrush = window.Citycrush = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Citycrush.Battle = Ember.ObjectController.extend({
  // Implement your controller here.
});

})();

(function() {

Citycrush.GameController = Ember.ObjectController.extend({
  // Implement your controller here.
});

})();

(function() {

Citycrush.LeaderboardsController = Ember.ObjectController.extend({
  // Implement your controller here.
});



})();

(function() {

Citycrush.ObjectivesController = Ember.ObjectController.extend({
  // Implement your controller here.
});



})();

(function() {

Citycrush.Store = DS.Store.extend();
Citycrush.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

App.Map = DS.Model.extend({
    titel = attr('string'),
    esriUrl = attr('string)
});

})();

(function() {

App.Objective = DS.Model.extend({
    objectiveType: belongsTo('objectiveType'),
    user: belongsTo('user'),
    started: attr('date'),
    obtained: attr('date'),
    abondoned: attr('date')
});

App.Objective.FIXTURES = [
    
    
    
    
    
    
] 

})();

(function() {

app.ObjectiveType = DS.Model.extend({
    title: attr('string'),
    action: attr('string'),
});


App.ObjectiveType.FIXTURES = [
    
    
    
    
    
    
] 

})();

(function() {

App.Position = DS.Model.extend({
    lat: attr('number'),
    long: attr('number')
});

})();

(function() {

App.User = DS.Model.extend({
    persona: attr('string'),
    name: attr('string'),
    avatar: attr('string'),
    currentPosition: belongsTo('position'),
    trace: hasMany('position'),
    objectives: hasMany('objective'),
    coins: attr('number')
});

App.User.FIXTURES = [
    
    
    
    
    
    
] 

})();

(function() {

Citycrush.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Citycrush.LeaderboardEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('leaderboard', model.leaderboard_id);
  }
});



})();

(function() {

Citycrush.LeaderboardRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('leaderboard', model.leaderboard_id);
  }
});



})();

(function() {

Citycrush.LeaderboardsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('leaderboard');
  }
});



})();

(function() {

Citycrush.LoginEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('login', model.login_id);
  }
});



})();

(function() {

Citycrush.LoginRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('login', model.login_id);
  }
});



})();

(function() {

Citycrush.LoginsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('login');
  }
});



})();

(function() {

Citycrush.ObjectivesEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('objectives', model.objectives_id);
  }
});



})();

(function() {

Citycrush.ObjectivesRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('objectives', model.objectives_id);
  }
});



})();

(function() {

Citycrush.SplashEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('splash', model.splash_id);
  }
});



})();

(function() {

Citycrush.SplashRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('splash', model.splash_id);
  }
});



})();

(function() {

Citycrush.SplashesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('splash');
  }
});



})();

(function() {

Citycrush.BoundTextFieldView = Ember.TextField.extend({
  valueBinding: 'content.value',
  contentChanged: function() {
    this.get('controller').get('model').set(
      this.get('content').key,
      this.get('content').value
    ); // ugly, but gets the job done
  }.observes('content.value')
});


})();

(function() {

Citycrush.Router.map(function () {
  
  this.resource('leaderboard');
    
  this.resource('game');  
  
  this.resource('objectives');

  this.resource('battle');
  
});


})();