Citycrush.RegisterController = Ember.ObjectController.extend({

    selectedAvatar:"/images/lege_avatar.png",
    updateSelectedAvatar: function () {
        var avatarUrl = this.get('avatar');
        if (avatarUrl === undefined || avatarUrl === null || avatarUrl === "") {
            this.set('selectedAvatar',"/images/lege_avatar.png");
        } else {
            this.set('selectedAvatar',avatarUrl);
        }
    }.observes('avatar'),
    actions: {
        selectAvatar: function (avatar) {
            this.set('avatar', avatar);
        }                                                     
    }
});