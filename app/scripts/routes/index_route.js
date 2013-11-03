Citycrush.IndexRoute = Ember.Route.extend({

    actions: {
        afterLogin: function () {
            if (Citycrush.currentUser.name === undefined 
                || Citycrush.currentUser.name === null 
                || Citycrush.currentUser.name === "") {
                this.transitionTo('register');
            } else {
                this.transitionTo('game');
            }
        }
    }

});