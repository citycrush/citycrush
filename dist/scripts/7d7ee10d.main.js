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

App.Battlefield = DS.Model.extend({
    position: belongsTo('position'),
    title: attr('string'),
    start: attr('date'),
    stop: attr('date')
});

App.Battlefield.FIXTURES = [
    {
        id: 1,
        position: 1,
        title: "sdfasdf",
        start: null,
        stop: null
    },
    {
        id: 2,
        position: 2,
        title: "sdfasdf",
        start: null,
        stop: null
    },
    {
        id: 3,
        position: 3,
        title: "sdfasdf",
        start: null,
        stop: null
    }
]

})();

(function() {

App.Map = DS.Model.extend({
    titel: attr('string'),
    esriMapId: attr('string)
});

App.Objective.FIXTURES = [
    {
        titel: "Het Noorderplantsoen",
        esriMapId: "722155c1b6b145e4897633674104006c"
    }
] 

})();

(function() {

App.Move = DS.Model.extend({
    title: attr('string'),
    beats: hasMany('moves')
});

App.Move.FIXTURES = [
    {
        id: 1
        title: "wave",
        beats: [3,4,5]
    },
    {
        id: 2
        title: "swirl",
        beats: [4,5,1]
    },
    {
        id: 3
        title: "hammer",
        beats: [5,1,2]
    },
    {
        id: 4
        title: "oelahlah",
        beats: [1,2,3]
    },
    {
        id: 5
        title: "italian",
        beats: [2,3,4]
    }
]

})();

(function() {

App.Position = DS.Model.extend({
    lat: attr('number'),
    long: attr('number'),
    timestamp: attr('date')
});

App.Position.FIXTURES = [
    {
        id: 1,
        lat: 53,2218,
        long: 6,5544,
        timestap: null
    },
    {
        id: 2,
        lat: 53,2219,
        long: 6,5545,
        timestap: null
    },
    {
        id: 3,
        lat: 53,2217,
        long: 6,5543,
        timestap: null
    },
    {
        id: 4,
        lat: 53,2220,
        long: 6,5542,
        timestap: null
    },
    {
        id: 5,
        lat: 53,2221,
        long: 6,5543,
        timestap: null
    },
    {
        id: 6,
        lat: 53,2224,
        long: 6,5543,
        timestap: null
    }
]

})();

(function() {

App.User = DS.Model.extend({
    email: attr('string'),
    name: attr('string'),
    avatar: attr('string'),
    currentPosition: belongsTo('position'),
    trace: hasMany('position'),
    objectives: hasMany('objective'),
    coins: attr('number')
});

App.User.FIXTURES = [
    {
        id: 1,
        email = "user1@citycrush.co",
        name = "user1",
        avatar = "/images/avatars/user1.png"
        currentPosition: 3
        trace: [3],
        objectives: [],
        coins: 45
    },
    {
        id: 2,
        email = "user2@citycrush.co",
        name = "user2",
        avatar = "/images/avatars/user2.png"
        currentPosition: 4
        trace: [4],
        objectives: [],
        coins: 20
    }
    
    
    
    
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