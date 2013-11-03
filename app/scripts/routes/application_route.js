Citycrush.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        var user = this.store.find('user', 1);//.get('firstObject');
        console.log(user.get('email'));
        return user;
    }
});
