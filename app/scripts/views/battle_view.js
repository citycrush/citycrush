Citycrush.BattleView = Em.View.extend({
    templateName: 'battle',
    init: function () {
        this._super();
        var that = this;
        console.log('added handler');
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', function (e) {
                that.get('deviceMotionHandler').apply(that, [e])
            }, false);
        };

    },
    deviceMotionHandler: function (eventData) {
        var info;
        console.log('event');
        // Grab the acceleration from the results
        var acceleration = eventData.acceleration;
        info = [acceleration.x, acceleration.y, acceleration.z];

        var maxAccell = Math.max.apply(Math, info.map(function (i) {
            return Math.abs(i);
        }));

        if (maxAccell > 9) {
            this.get('controller').send('hammer', maxAccell);
        }
    }
});