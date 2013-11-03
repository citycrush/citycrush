Citycrush.IndexRoute = Ember.Route.extend({

    actions: {
        afterLogin: function () {
            var zis = this
            console.log('after login');
            this.store.find('user', 1).then(function (user) {
                console.log(user.get('avatar'));
                var name = user.get('name');
                var avatar = user.get('avatar');

                if (name === undefined || name === null || name === "" 
                    || avatar === undefined || avatar === null || avatar === "") {
                    zis.transitionTo('register');
                } else {
                    console.log(zis);
                    zis.transitionTo('game');
                }
                return user;
            });
        }
    }
});