Citycrush.IndexController = Ember.Controller.extend({

        actions: {
            login: function () {
                navigator.id.request();
            }
        }
});