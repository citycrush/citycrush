Citycrush.ApplicationController = Ember.Controller.extend({
    init: function () {
        this._super();
        console.log(this.get('model'));
        navigator.id.watch({
            loggedInUser: this.get('email'),
            onlogin: function (assertion) {
                console.log('login');
            },
            onlogout: function () {
                console.log('logout');
            }
        });
    }
});