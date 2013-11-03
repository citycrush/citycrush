Citycrush.FightRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('kingdom', 1);
    },
    actions: {
        result: function(wins){
            this.transitionTo('result', wins > 2);
        }
    }
});