Citycrush.GameController = Ember.ObjectController.extend({
    map: null,
    // Implement your controller here.
    distanceTo: function (from, to)
    {
        var theta = from.x - to.x;
        var dist = Math.sin(deg2rad(from.y)) * Math.sin(deg2rad(to.y)) + Math.cos(deg2rad(from.y)) * Math.cos(deg2rad(to.y)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515 * 1.609344 * 1000; // distance in meters
        return dist;
    },
    deg2rad: function (deg)
    {
        return (deg * Math.PI / 180.0);
    },

    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::  This function converts radians to decimal degrees             :::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    rad2deg: function (rad)
    {
        return (rad / Math.PI * 180.0);
    },        
    showLocation: function (location) {
        //zoom to the users location and add a graphic
        alert('Got location');
        var pt = new Point(location.coords.longitude, location.coords.latitude);
        if (!graphic) {
            addGraphic(pt);
        } else { // move the graphic if it already exists
            graphic.setGeometry(pt);
        }
        map.centerAt(pt);
    },
    addGraphic: function (pt) {
        var symbol = new SimpleMarkerSymbol(
            SimpleMarkerSymbol.STYLE_CIRCLE,
            12,
            new SimpleLineSymbol(
                SimpleLineSymbol.STYLE_SOLID,
                new Color([210, 105, 30, 0.5]),
                8
            ),
            new Color([210, 105, 30, 0.9])
        );
        graphic = new Graphic(pt, symbol);
        map.graphics.add(graphic);
    }
});