Citycrush.ApplicationController = Ember.Controller.extend({

    actions: {
        login: function() {navigator.id.request();},
        logout: function() {navigator.id.logout();}
    },
    init: function () {
        this._super();
        this.set('model', this.get('store').findAll('user').get('firstObject'));
        console.log(this.get('model.email'));

        navigator.id.watch({
            loggedInUser: this.get('model'),
            onlogin: function (assertion) {
                
            },
            onlogout: function () {

            }
        });
    }
})