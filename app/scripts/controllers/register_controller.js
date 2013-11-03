Citycrush.RegisterController = Ember.ObjectController.extend({

    selectedAvatar: function () {
        var avatarUrl = this.get('avatar');
        console.log('avatarurl');
        console.log(avatarUrl);
        if (avatarUrl === undefined || avatarUrl === null || avatarUrl === "") {
            console.log('leeg');
            return "/images/lege_avatar.png"
        } else {
            return avatarUrl;
        }
    }.property('avatar').on('init'),

    actions: {
        selectAvatar: function (avatar) {
            this.set('avatar', avatar);
        }
    }
});