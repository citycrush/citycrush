Citycrush.BattleRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return this.get('store').find('kingdom', 1);
    }
});
