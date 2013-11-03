Citycrush.IndexRoute = Ember.Route.extend({

    actions: {
        afterLogin: function () {
            this.transitionTo('game');
        }
    }

});