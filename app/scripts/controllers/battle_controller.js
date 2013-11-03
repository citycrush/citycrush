Citycrush.Battle = Ember.ObjectController.extend({
    init: function () {
        this._super();
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this.deviceMotionHandler, false);
        }
    },
    actions: {
        hammer: function (maxAccell) {
            // Hammmer time!
            alert('hammer');
            var snd = new Audio("/styles/Swirl.mp3"); // buffers automatically when created
            snd.play();
        }
    },
    deviceMotionHandler: function (eventData) {
        var info, xyz = "[X, Y, Z]";

        // Grab the acceleration from the results
        var acceleration = eventData.acceleration;
        info = [acceleration.x, acceleration.y, acceleration.z];

        var maxAccell = Math.max.apply(Math, info.map(function (i) {
            return Math.abs(i);
        }));


        //        if (info[1] > 3)
        //            $("#moRotation").html("Shake");
        //        else
        //            $("#moRotation").html("");
        //        //document.getElementById("moAccel").innerHTML = info;
        //        
        //        // Grab the acceleration including gravity from the results
        //        acceleration = eventData.accelerationIncludingGravity;
        //        info = xyz.replace("X", acceleration.x);
        //        info = info.replace("Y", acceleration.y);
        //        info = info.replace("Z", acceleration.z);
        //        //document.getElementById("moAccelGrav").innerHTML = info;
        //        
        //        // Grab the rotation rate from the results
        //        var rotation = eventData.rotationRate;
        //        info = xyz.replace("X", rotation.alpha);
        //        info = info.replace("Y", rotation.beta);
        //        info = info.replace("Z", rotation.gamma);
        //          
        //        
        //        // // Grab the refresh interval from the results
        //        info = eventData.interval;
        //        //$("#moInterval").html(info);   
    }
});