Citycrush.RegisterController = Ember.ObjectController.extend({
  actions: {
    selectAvatar: function (avatar) {
        this.set('avatar', avatar);  
        $(this).toggleClass('selected');
        console.log($(this));
    }
  }
});

