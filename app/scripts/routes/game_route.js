Citycrush.GameRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return {
            closeEnough: ''
        };

        //return this.get('store').find('game', 1);

    }
});
