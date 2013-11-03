Citycrush.FightController = Em.ObjectController.extend({
    moves: Em.A(),
    actions: {
        move: function(id){
            if (this.get('moves').length < 3){
                this.get('moves').addObject(id);
            } else {
                var model = this.get('model');
                var key = JSON.parse(model.get('key'));
                var wins = 0;
                this.get('moves').forEach(function(move, idx){
                    if (move != key[idx]){
                        if (move == 1 && key[idx] == 3){
                            wins++;
                        } else if (move == 2 && key[idx] == 1){
                            wins++
                        } else if if (move == 3 && key[idx] == 2){
                            wins++
                        }
                    }
                });
                this.send('result', wins);
            }
        }
    }
});