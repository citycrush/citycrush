Citycrush.FightController = Em.ObjectController.extend({
    moves: Em.A(),
    actions: {
        move: function(id){
            var that = this;
            if (this.get('moves').length < 2){
                this.get('moves').pushObject(id);
            } else {
                this.get('moves').pushObject(id);
                var model = this.get('model');
                var key = JSON.parse(model.get('key'));
                var wins = 0;
                this.get('moves').forEach(function(move, idx){
                    if (move !== key[idx]){
                        if (move === 1 && key[idx] === 3){
                            wins++;
                        } else if (move === 2 && key[idx] === 1){
                            wins++
                        } else if (move === 3 && key[idx] === 2){
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