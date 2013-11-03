!function(){window.Citycrush=Ember.Application.create()}(),function(){Citycrush.ApplicationController=Ember.Controller.extend({init:function(){this._super(),console.log(this.get("model")),navigator.id.watch({loggedInUser:this.get("email"),onlogin:function(){console.log("login")},onlogout:function(){console.log("logout")}})}})}(),function(){Citycrush.Battle=Ember.ObjectController.extend({init:function(){this._super(),window.DeviceMotionEvent&&window.addEventListener("devicemotion",this.deviceMotionHandler,!1)},deviceMotionHandler:function(a){var b,c=a.acceleration;b=[c.x,c.y,c.z],Math.max.apply(Math,b.map(function(a){return Math.abs(a)}))}})}(),function(){Citycrush.GameController=Ember.ObjectController.extend({map:null,distanceTo:function(a,b){var c=a.x-b.x,d=Math.sin(deg2rad(a.y))*Math.sin(deg2rad(b.y))+Math.cos(deg2rad(a.y))*Math.cos(deg2rad(b.y))*Math.cos(deg2rad(c));return d=Math.acos(d),d=rad2deg(d),d=1e3*1.609344*1.1515*60*d},deg2rad:function(a){return a*Math.PI/180},rad2deg:function(a){return 180*(a/Math.PI)},showLocation:function(a){alert("Got location");var b=new Point(a.coords.longitude,a.coords.latitude);graphic?graphic.setGeometry(b):addGraphic(b),map.centerAt(b)},addGraphic:function(a){var b=new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE,12,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([210,105,30,.5]),8),new Color([210,105,30,.9]));graphic=new Graphic(a,b),map.graphics.add(graphic)}})}(),function(){Citycrush.IndexController=Ember.Controller.extend({actions:{login:function(){navigator.id.request()},logout:function(){navigator.id.logout()},register:function(){}}})}(),function(){Citycrush.LeaderboardsController=Ember.ObjectController.extend({})}(),function(){Citycrush.ObjectivesController=Ember.ObjectController.extend({})}(),function(){Citycrush.Store=DS.Store.extend(),Citycrush.ApplicationAdapter=DS.FixtureAdapter}(),function(){Citycrush.Game=DS.Model.extend({map:DS.belongsTo("map"),kingsdoms:DS.hasMany("kingdom"),lands:DS.hasMany("land")}),Citycrush.Game.FIXTURES=[{id:1,map:1,kingdoms:[1,2],lands:[1,2]}]}(),function(){Citycrush.Kingdom=DS.Model.extend({land:DS.belongsTo("land"),title:DS.attr("string"),start:DS.attr("date"),stop:DS.attr("date"),king:DS.belongsTo("user"),key:DS.hasMany("moves")}),Citycrush.Kingdom.FIXTURES=[{id:1,land:1,title:"sdfasdf",start:null,stop:null,key:[1,2,4],king:1},{id:2,position:2,title:"sdfasdf",start:null,stop:null,key:[3,4,1],king:2}]}(),function(){Citycrush.Land=DS.Model.extend({lat:DS.attr("number"),"long":DS.attr("number"),name:DS.attr("string"),radius:DS.attr("number"),kingdom:DS.belongsTo("kingdom")}),Citycrush.Land.FIXTURES=[{id:1,lat:53.2218,"long":6.5544,name:"dfsdf",radius:0,kingdom:1},{id:2,lat:53.2219,"long":6.5545,name:"sdgasgasgsdg",radius:0,kingdom:2}]}(),function(){Citycrush.Map=DS.Model.extend({title:DS.attr("string"),esriMapId:DS.attr("string")}),Citycrush.Map.FIXTURES=[{id:1,title:"Het Noorderplantsoen",esriMapId:"722155c1b6b145e4897633674104006c"}]}(),function(){Citycrush.Move=DS.Model.extend({title:DS.attr("string"),beats:DS.hasMany("moves")}),Citycrush.Move.FIXTURES=[{id:1,title:"wave",beats:[3,4,5]},{id:2,title:"swirl",beats:[4,5,1]},{id:3,title:"hammer",beats:[5,1,2]},{id:4,title:"oelahlah",beats:[1,2,3]},{id:5,title:"italian",beats:[2,3,4]}]}(),function(){Citycrush.Position=DS.Model.extend({lat:DS.attr("number"),"long":DS.attr("number"),timestamp:DS.attr("date")}),Citycrush.Position.FIXTURES=[{id:1,lat:53.2218,"long":6.5544,timestap:null},{id:2,lat:53.2219,"long":6.5545,timestap:null},{id:3,lat:53.2217,"long":6.5543,timestap:null},{id:4,lat:53.222,"long":6.5542,timestap:null},{id:5,lat:53.2221,"long":6.5543,timestap:null},{id:6,lat:53.2224,"long":6.5543,timestap:null}]}(),function(){Citycrush.User=DS.Model.extend({email:DS.attr("string"),name:DS.attr("string"),avatar:DS.attr("string"),currentPosition:DS.belongsTo("position"),trace:DS.hasMany("position"),coins:DS.attr("number"),challengesLost:DS.attr("number"),challengesWon:DS.attr("number"),kingof:DS.hasMany("kingdom")}),Citycrush.User.FIXTURES=[{id:1,email:"user1@citycrush.co",name:"user1",avatar:"/images/avatars/user1.png",currentPosition:3,trace:[3],coins:45,challengesLost:0,challengesWon:5,kingof:[1]},{id:2,email:"user2@citycrush.co",name:"user2",avatar:"/images/avatars/user2.png",currentPosition:4,trace:[4],coins:20,challengesLost:3,challengesWon:1,kingof:[2]}]}(),function(){Citycrush.ApplicationRoute=Ember.Route.extend({model:function(){var a=this.store.find("user",1);return console.log(a.get("email")),a}})}(),function(){Citycrush.LeaderboardEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("leaderboard",a.leaderboard_id)}})}(),function(){Citycrush.LeaderboardRoute=Ember.Route.extend({model:function(a){return this.get("store").find("leaderboard",a.leaderboard_id)}})}(),function(){Citycrush.LeaderboardsRoute=Ember.Route.extend({model:function(){return this.get("store").find("leaderboard")}})}(),function(){Citycrush.LoginEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("login",a.login_id)}})}(),function(){Citycrush.LoginRoute=Ember.Route.extend({model:function(a){return this.get("store").find("login",a.login_id)}})}(),function(){Citycrush.LoginsRoute=Ember.Route.extend({model:function(){return this.get("store").find("login")}})}(),function(){Citycrush.ObjectivesEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("objectives",a.objectives_id)}})}(),function(){Citycrush.ObjectivesRoute=Ember.Route.extend({model:function(a){return this.get("store").find("objectives",a.objectives_id)}})}(),function(){Citycrush.SplashEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("splash",a.splash_id)}})}(),function(){Citycrush.SplashRoute=Ember.Route.extend({model:function(a){return this.get("store").find("splash",a.splash_id)}})}(),function(){Citycrush.SplashesRoute=Ember.Route.extend({model:function(){return this.get("store").find("splash")}})}(),function(){Citycrush.BoundTextFieldView=Ember.TextField.extend({valueBinding:"content.value",contentChanged:function(){this.get("controller").get("model").set(this.get("content").key,this.get("content").value)}.observes("content.value")})}(),function(){Citycrush.GameView=Em.View.extend({templateName:"game",didInsertElement:function(){var a=this;require(["esri/map","esri/layers/FeatureLayer","esri/dijit/LocateButton","esri/arcgis/utils","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","dojo/_base/Color","esri/graphic","dojo/_base/connect","dojo/domReady!"],function(b,c,d,e,f,g,h,i,j){var k={enableHighAccuracy:!1,timeout:5e3,maximumAge:0},l=new g;l.setStyle="circle",l.setColor(new h("#FF0000"));var m,n,o,p=function(){navigator.geolocation&&navigator.geolocation.watchPosition(t,function(){},k)},q=!0,r=(new esri.symbol.SimpleLineSymbol).setColor(new dojo.Color([0,0,0,1])),s=function(b){console.log("clicked the map: ",b);var c,d,e,g,h,i=1e-4,j=1e-4,k=new f(b.x+i,b.y),l=new f(b.x,b.y+j),m=distanceTo(b,k),n=distanceTo(b,l);c=20;var p=c/m*i,q=c/n*j;d=new esri.geometry.Polygon,e=[],g=40,h=360/g;for(var s=1;g>=s;s++){var t=s*h*Math.PI/180;e.push([b.x+p*Math.cos(t),b.y+q*Math.sin(t)])}e.push(e[0]),d.addRing(e),o&&a.get("map").graphics.remove(o),o=new esri.Graphic(d,r),a.get("map").graphics.add(o),console.log("added a graphic")},t=function(b){n=new f(b.coords.longitude,b.coords.latitude),m&&a.get("map").graphics.remove(m),m=new i(n,l),a.get("map").graphics.add(m),s(n),q&&(a.get("map").centerAt(m.geometry),q=!1),a.get("map").getLayersVisibleAtScale()[1]},u="722155c1b6b145e4897633674104006c",v=e.createMap(u,"map",{mapOptions:{autoResize:!1},ignorePopups:!1});v.addCallback(function(b){a.set("map",b.map),p();var c=a.get("map").getLayersVisibleAtScale()[1];j.connect(c,"onClick",function(a){var b=esri.geometry.webMercatorToGeographic(a.graphic.geometry),c=m.geometry,d=distanceTo(b,c);20>d?$("#moRotation").html("Close enough"):$("#moRotation").html("Not close enough")})})})}})}(),function(){Citycrush.Router.map(function(){this.route("leaderboard"),this.route("game"),this.route("battle")})}();