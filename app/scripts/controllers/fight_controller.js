Citycrush.FightController = Em.ObjectController.extend({
    moves: Em.A(),
    actions: {
        move: function(id){
            var that = this;
            if (this.get('moves').length < 2){
                this.get('moves').pushObject("images/" + id + ".png");
            } else {
                this.get('moves').pushObject("images/" + id + ".png");
                var model = this.get('model');
                var key = JSON.parse(model.get('key'));
                var wins = 0;
                this.get('moves').forEach(function(move, idx){
                    if (move !== key[idx]){
                        if (move === "images/1.png" && key[idx] === 3){
                            wins++;
                        } else if (move === "images/2.png" && key[idx] === 1){
                            wins++
                        } else if (move === "images/3.png" && key[idx] === 2){
                            wins++
                        }
                    }
                    that.set('moves', Em.A());
                });
                this.send('result', wins);
            }
        }
    }
});