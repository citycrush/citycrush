Citycrush.GameController = Ember.ObjectController.extend({
    map: null,
    
    actions: {
        closeEnough: function (id) {
            if (id > 0) {
                this.set('closeEnough', "Whooohoo you're in range FIGHT!!");
                this.send('startBattle', id);
            } else {
                this.set('closeEnough', "not yet!");
            }
        },
    }
    // Implement your controller here.
    //    distanceTo: function (from, to)
    //    {
    //        var theta = from.x - to.x;
    //        var dist = Math.sin(this.get('deg2rad')(from.y)) * Math.sin(this.get('deg2rad')(to.y)) + Math.cos(this.get('deg2rad')(from.y)) * Math.cos(this.get('deg2rad')(to.y)) * Math.cos(this.get('deg2rad')(theta));
    //        dist = Math.acos(dist);
    //        dist = this.get('rad2deg')(dist);
    //        dist = dist * 60 * 1.1515 * 1.609344 * 1000; // distance in meters
    //        return dist;
    //    },
    //    deg2rad: function (deg)
    //    {
    //        return (deg * Math.PI / 180.0);
    //    },
    //    
    //    rad2deg: function (rad)
    //    {
    //        return (rad / Math.PI * 180.0);
    //    },        
    //    showLocation: function (location) {
    //        //zoom to the users location and add a graphic
    //        alert('Got location');
    //        var pt = new Point(location.coords.longitude, location.coords.latitude);
    //        if (!graphic) {
    //            this.get('addGraphic')(pt);
    //        } else { // move the graphic if it already exists
    //            graphic.setGeometry(pt);
    //        }
    //        map.centerAt(pt);
    //    },
    //    addGraphic: function (pt) {
    //        var symbol = new SimpleMarkerSymbol(
    //            SimpleMarkerSymbol.STYLE_CIRCLE,
    //            12,
    //            new SimpleLineSymbol(
    //                SimpleLineSymbol.STYLE_SOLID,
    //                new Color([210, 105, 30, 0.5]),
    //                8
    //            ),
    //            new Color([210, 105, 30, 0.9])
    //        );
    //        graphic = new Graphic(pt, symbol);
    //        map.graphics.add(graphic);
    //    }
});