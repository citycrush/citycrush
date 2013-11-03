Citycrush.GameView = Em.View.extend({
    templateName: 'game',
    didInsertElement: function () {
        var that = this;
        require([
              "esri/map",
              "esri/layers/FeatureLayer",
              "esri/dijit/LocateButton",
              "esri/arcgis/utils",
              "esri/geometry/Point",
              "esri/symbols/SimpleMarkerSymbol",
              "dojo/_base/Color",
              "esri/graphic",
              "dojo/_base/connect",
              "dojo/domReady!"
            ], function (Map, FeatureLayer, LocateButton, arcgisUtils, Point, SimpleMarkerSymbol, Color, Graphic, connect) {

                var options = {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 0
                };

                var markerSymbol = new SimpleMarkerSymbol();
                markerSymbol.setStyle = "circle";
                //markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
                markerSymbol.setColor(new Color("#FF0000"));

                //var markerSymbolOuter = new SimpleMarkerSymbol();
                // markerSymbolOuter.setStyle = "circle";
                //markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
                //markerSymbol.setColor(new Color("#FF0000"));

                var getLocation = function () {
                    if (navigator.geolocation) {
                        navigator.geolocation.watchPosition(zoomToLocation, function (e) { }, options);
                    }
                };
                var playerGraphic;
                var pt;
                var firstTimeZoom = true;
                var sym = new esri.symbol.SimpleLineSymbol().setColor(new dojo.Color([0, 0, 0, 1]));
                var circleGraphic;

                var distanceTo = function (from, to) {
                    var theta = from.x - to.x;
                    var dist = Math.sin(deg2rad(from.y)) * Math.sin(deg2rad(to.y)) + Math.cos(deg2rad(from.y)) * Math.cos(deg2rad(to.y)) * Math.cos(deg2rad(theta));
                    dist = Math.acos(dist);
                    dist = rad2deg(dist);
                    dist = dist * 60 * 1.1515 * 1.609344 * 1000; // distance in meters
                    return dist;
                };
                var deg2rad = function (deg) {
                    return (deg * Math.PI / 180.0);
                };

                var rad2deg = function (rad) {
                    return (rad / Math.PI * 180.0);
                };

                var addCircle = function (pt) {
                    console.log("clicked the map: ", pt);
                    var radius, circle, ring, pts, angle;

                    var scaleX = 0.0001;
                    var scaleY = 0.0001;

                    var mp2X = new Point(pt.x + scaleX, pt.y);
                    var mp2Y = new Point(pt.x, pt.y + scaleY);

                    var distX = distanceTo(pt, mp2X);
                    var distY = distanceTo(pt, mp2Y);

                    radius = 20.0;

                    var resX = radius / distX * scaleX;
                    var resY = radius / distY * scaleY;


                    //pt = e.mapPoint;
                    circle = new esri.geometry.Polygon(); //map.spatialReference);
                    ring = []; // point that make up the circle
                    pts = 40; // number of points on the circle
                    angle = 360 / pts; // used to compute points on the circle
                    for (var i = 1; i <= pts; i++) {
                        // convert angle to raidans
                        var radians = i * angle * Math.PI / 180;
                        // add point to the circle
                        ring.push([pt.x + (resX) * Math.cos(radians), pt.y + (resY) * Math.sin(radians)]);
                    }
                    ring.push(ring[0]); // start point needs to == end point
                    circle.addRing(ring);
                    if (circleGraphic) {
                        that.get('map').graphics.remove(circleGraphic);
                    }
                    circleGraphic = new esri.Graphic(circle, sym);
                    that.get('map').graphics.add(circleGraphic);
                    console.log("added a graphic");
                };

                var zoomToLocation = function (location) {
                    // Check distance to objects

                    pt = new Point(location.coords.longitude, location.coords.latitude);
                    if (playerGraphic) {
                        that.get('map').graphics.remove(playerGraphic);
                    }
                    playerGraphic = new Graphic(pt, markerSymbol);
                    that.get('map').graphics.add(playerGraphic);
                    addCircle(pt);
                    //map.centerAndZoom(pt, 16);
                    if (firstTimeZoom) {
                        that.get('map').centerAt(playerGraphic.geometry);
                        firstTimeZoom = false;
                    }
                    var crushLayer = that.get('map').getLayersVisibleAtScale()[2];
                    var distStr = "";

                    /*for (var objId in crushLayer.graphics) {
                    var mo = crushLayer.graphics[objId];
                    // Check location
                    var loc1 = esri.geometry.webMercatorToGeographic(mo.geometry);
                    var loc2 = playerGraphic.geometry;
                    var dist = distanceTo(loc1, loc2);
                    distStr += dist + " ";
                    }*/
                    //$("#moRotation").html(distStr);
                };

                var webmap = "722155c1b6b145e4897633674104006c";
                var mapDeferred = arcgisUtils.createMap(webmap, "map", {
                    mapOptions: {
                        //infoWindow: popup,
                        autoResize: false
                    },
                    ignorePopups: false

                });

                /*map = new Map("map", {
                center: [-56.049, 38.485],
                zoom: 3,
                basemap: "topo"
                });*/
                mapDeferred.addCallback(function (response) {
                    that.set('map', response.map);
                    /*geoLocate = new LocateButton({
                    map: map
                    }, "LocateButton");
                    geoLocate.startup();*/
                    //currentItem = response.itemInfo;
                    //$("#webmapTitle").html(currentItem.item.title);
                    //navigator.geolocation.watchPosition(showLocation, locationError);
                    //resizeMap();
                    getLocation();
                    var crushLayer = that.get('map').getLayersVisibleAtScale()[2];
                    connect.connect(crushLayer, "onClick", function (evt) {
                        // Show battle screen if close enough
                        var loc1 = esri.geometry.webMercatorToGeographic(evt.graphic.geometry);
                        var closeenough;
                        if (playerGraphic){
                            var loc2 = playerGraphic.geometry;
                            closeenough = distanceTo(loc1, loc2) < 20;
                        }
                        if (closeenough && playerGraphic) {
                            that.get('controller').send('closeEnough', evt.graphic.attributes.OBJECTID);
                            var snd = new Audio("/styles/round1fight.mp3"); // buffers automatically when created
                            snd.play();
                            
                            //$("#moRotation").html("Close enough");
                            // Open battle screen
                        }
                        else {
                            that.get('controller').send('closeEnough', -1);
                        }
                    });
                    //crushLayer.setDefinitionExpression("OBJECTID < 4");
                });
            });
    }
});