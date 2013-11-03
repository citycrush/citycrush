Citycrush.RegisterController = Ember.ObjectController.extend({
  actions: {
    selectAvatar: function (avatar) {
        this.set('avatar', avatar);   
    },
    onClick: function (e) {
        $(e.target).toggleClass('selected');
    }
  }
});

