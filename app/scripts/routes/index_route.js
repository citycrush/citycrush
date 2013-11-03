Citycrush.IndexRoute = Ember.Route.extend({

    actions: {
        afterLogin: function () {
            console.log('after login');
            this.store.find('user', 1).then(function (user) {
                console.log(user.get('avatar'));
                var name = user.get('name');
                var avatar = user.get('avatar');

                if (name === undefined || name === null || name === "" 
                    || avatar === undefined || avatar === null || avatar === "") {
                    this.transitionTo('register');
                } else {
                    console.log('route to game');
                    this.transitionTo('game');
                }
                return user;
            });
        }
    }
});