Citycrush.FightRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('kingdom', 1);
    }
});

