Citycrush.ResultRoute = Ember.Route.extend({
    model: function(objectid) {
        return { won: JSON.parse(objectid.yes) };
    }    
});