Citycrush.FightView = Em.View.extend({
    //templateName: 'battle',
    init: function () {
        this._super();
        var that = this;
        //console.log('added handler');
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', function (e) {
                that.get('deviceMotionHandler').apply(that, [e]);
            }, false);
        }
    },
    deviceMotionHandler: function () {
            
        var info;
        var infoRot;

        // Grab the acceleration from the results
        var acceleration = eventData.accelerationIncludingGravity;
        info = [acceleration.x, acceleration.y, acceleration.z];
        var rotation = eventData.rotationRate;
        infoRot = [rotation.alpha, rotation.beta, rotation.gamma];
        var maxAccell = Math.max.apply(Math, info.map(function (i) {
            return Math.abs(i);
        }));
        
        var sensVectLength = Math.sqrt(info[0] * info[0] + info[1] * info[1] + info[2] * info[2]);
        var rotVectLength = Math.sqrt(infoRot[0] * infoRot[0] + infoRot[1] * infoRot[1] + infoRot[2] * infoRot[2]);
        var rotVectLengthA = Math.sqrt(infoRot[0] * infoRot[0]);
        var timeSinceEvent = new Date().getTime() - lastEventTime;

            // Water
            if (timeSinceEvent > 2000 && sensVectLength > 9 && rotVectLength > 14 && Math.abs(infoRot[0]) < 6 && Math.abs(infoRot[1]) > 16 && Math.abs(infoRot[2]) < 6) {

                lastEventTime = new Date().getTime();
                timeSinceEvent = new Date().getTime() - lastEventTime;
                this.get('controller').send('move', 1);
            }
            // Lighting
            if (timeSinceEvent > 2000 && sensVectLength > 20 && Math.abs(info[0]) > 15 && Math.abs(info[1]) > 15 && Math.abs(info[2]) > 15) {

                lastEventTime = new Date().getTime();
                timeSinceEvent = new Date().getTime() - lastEventTime;
                this.get('controller').send('move', 2);
            }
            // Air
            if (timeSinceEvent > 2000 && sensVectLength < 2) {

                lastEventTime = new Date().getTime();
                timeSinceEvent = new Date().getTime() - lastEventTime;
                this.get('controller').send('move', 3);
            }
        }
    }
});