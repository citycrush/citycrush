Citycrush.IndexController = Ember.Controller.extend({

        actions: {
            login: function () {
                navigator.id.request();
            },
            logout: function () {
                navigator.id.logout();
            },
            register: function () {}
        }
});