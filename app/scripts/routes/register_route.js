Citycrush.RegisterRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('user', Citycrush.currentUser);
    },
    actions: {
        register: function () {
            this.transitionTo('game');
        }
    }
});

