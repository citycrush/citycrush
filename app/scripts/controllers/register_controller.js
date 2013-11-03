Citycrush.RegisterController = Ember.ObjectController.extend({
    
    selectedAvatar: function(){
        var avatarUrl = this.get('avatar');
        if (avatarUrl === undefined || avatarUrl === null || avatarUrl === "")
            return "/images/lege-avatar.png"
        else {
            return avatarUrl;
        } 
    }.observes('avatar'),
    
  actions: {
    selectAvatar: function (avatar) {
        this.set('avatar', avatar);
    }
  }
});

