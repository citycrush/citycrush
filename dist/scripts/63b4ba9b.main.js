!function(){window.Citycrush=Ember.Application.create()}(),function(){Citycrush.ApplicationController=Ember.Controller.extend({init:function(){function a(){c.send("afterLogin")}function b(){}this._super();var c=this;Citycrush.currentUser=1;var d={};navigator.id.watch({loggedInUser:d,onlogin:a,onlogout:b})}})}(),function(){Citycrush.Battle=Ember.ObjectController.extend({})}(),function(){Citycrush.FightController=Em.ObjectController.extend({moves:Em.A(),actions:{move:function(a){var b=this;if(this.get("moves").length<2)this.get("moves").pushObject("images/"+a+".png");else{this.get("moves").pushObject("images/"+a+".png");var c=this.get("model"),d=JSON.parse(c.get("key")),e=0;this.get("moves").forEach(function(a,c){a!==d[c]&&("images/1.png"===a&&3===d[c]?e++:"images/2.png"===a&&1===d[c]?e++:"images/3.png"===a&&2===d[c]&&e++),b.set("moves",Em.A())}),this.send("result",e)}}}})}(),function(){Citycrush.GameController=Ember.ObjectController.extend({map:null,actions:{closeEnough:function(a){a>0?(this.set("closeEnough","Whooohoo you're in range FIGHT!!"),this.send("startBattle",a)):this.set("closeEnough","not yet!")}}})}(),function(){Citycrush.IndexController=Ember.Controller.extend({actions:{login:function(){navigator.id.request()}}})}(),function(){Citycrush.LeaderboardsController=Ember.ObjectController.extend({})}(),function(){Citycrush.ObjectivesController=Ember.ObjectController.extend({})}(),function(){Citycrush.RegisterController=Ember.ObjectController.extend({selectedAvatar:"/images/lege_avatar.png",updateSelectedAvatar:function(){var a=this.get("avatar");void 0===a||null===a||""===a?this.set("selectedAvatar","/images/lege_avatar.png"):this.set("selectedAvatar",a)}.observes("avatar"),actions:{selectAvatar:function(a){this.set("avatar",a)}}})}(),function(){Citycrush.Store=DS.Store.extend(),Citycrush.ApplicationAdapter=DS.FixtureAdapter}(),function(){Citycrush.Game=DS.Model.extend({map:DS.belongsTo("map"),kingsdoms:DS.hasMany("kingdom"),lands:DS.hasMany("land"),closeEnough:DS.attr("string")}),Citycrush.Game.FIXTURES=[{id:1,map:1,kingdoms:[1,2],lands:[1,2],closeEnough:-1}]}(),function(){Citycrush.Kingdom=DS.Model.extend({land:DS.belongsTo("land"),title:DS.attr("string"),start:DS.attr("date"),stop:DS.attr("date"),king:DS.belongsTo("user"),key:DS.attr("string")}),Citycrush.Kingdom.FIXTURES=[{id:1,land:1,title:"Robert-Jan",start:null,stop:null,key:"[1,2,3]",king:1},{id:2,position:2,title:"sdfasdf",start:null,stop:null,key:"[3,4,1]",king:2}]}(),function(){Citycrush.Land=DS.Model.extend({lat:DS.attr("number"),"long":DS.attr("number"),name:DS.attr("string"),radius:DS.attr("number"),kingdom:DS.belongsTo("kingdom"),esriMapObjectId:DS.attr("string")}),Citycrush.Land.FIXTURES=[{id:1,lat:53.2218,"long":6.5544,name:"Robert-Jan",radius:0,kingdom:1,esriMapObjectId:"0"},{id:2,lat:53.2219,"long":6.5545,name:"sdgasgasgsdg",radius:0,kingdom:2,esriMapObjectId:"0"}]}(),function(){Citycrush.Map=DS.Model.extend({title:DS.attr("string"),esriMapId:DS.attr("string")}),Citycrush.Map.FIXTURES=[{id:1,title:"Het Noorderplantsoen",esriMapId:"722155c1b6b145e4897633674104006c"}]}(),function(){Citycrush.Move=DS.Model.extend({title:DS.attr("string"),beats:DS.hasMany("move")}),Citycrush.Move.FIXTURES=[{id:1,title:"wave",beats:[3,4,5]},{id:2,title:"swirl",beats:[4,5,1]},{id:3,title:"hammer",beats:[5,1,2]},{id:4,title:"oelahlah",beats:[1,2,3]},{id:5,title:"italian",beats:[2,3,4]}]}(),function(){Citycrush.Position=DS.Model.extend({lat:DS.attr("number"),"long":DS.attr("number"),timestamp:DS.attr("date")}),Citycrush.Position.FIXTURES=[{id:1,lat:53.2218,"long":6.5544,timestap:null},{id:2,lat:53.2219,"long":6.5545,timestap:null},{id:3,lat:53.2217,"long":6.5543,timestap:null},{id:4,lat:53.222,"long":6.5542,timestap:null},{id:5,lat:53.2221,"long":6.5543,timestap:null},{id:6,lat:53.2224,"long":6.5543,timestap:null}]}(),function(){Citycrush.User=DS.Model.extend({email:DS.attr("string"),name:DS.attr("string"),avatar:DS.attr("string"),currentPosition:DS.belongsTo("position"),trace:DS.hasMany("position"),coins:DS.attr("number"),challengesLost:DS.attr("number"),challengesWon:DS.attr("number"),kingof:DS.hasMany("kingdom")}),Citycrush.User.FIXTURES=[{id:1,email:"remko.boschker@gmail.com",name:"user1",avatar:"",currentPosition:3,trace:[3],coins:45,challengesLost:0,challengesWon:5,kingof:[1]},{id:2,email:"user2@citycrush.co",name:"user2",avatar:"/images/avatars/user2.png",currentPosition:4,trace:[4],coins:20,challengesLost:3,challengesWon:1,kingof:[2]}]}(),function(){Citycrush.ApplicationRoute=Ember.Route.extend({})}(),function(){Citycrush.BattleRoute=Ember.Route.extend({model:function(){return this.get("store").find("kingdom",1)}})}(),function(){Citycrush.FightRoute=Ember.Route.extend({model:function(){return this.store.find("kingdom",1)},actions:{result:function(a){this.transitionTo("result",a>2)}}})}(),function(){Citycrush.GameRoute=Ember.Route.extend({model:function(){return{closeEnough:""}},actions:{startBattle:function(){this.transitionTo("battle")}}})}(),function(){Citycrush.IndexRoute=Ember.Route.extend({actions:{afterLogin:function(){var a=this;console.log("after login"),this.store.find("user",1).then(function(b){console.log(b.get("avatar"));var c=b.get("name"),d=b.get("avatar");return void 0===c||null===c||""===c||void 0===d||null===d||""===d?a.transitionTo("register"):(console.log(a),a.transitionTo("game")),b})}}})}(),function(){Citycrush.LeaderboardsRoute=Ember.Route.extend({model:function(){return this.get("store").find("leaderboard")}})}(),function(){Citycrush.LoginEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("login",a.login_id)}})}(),function(){Citycrush.LoginRoute=Ember.Route.extend({model:function(a){return this.get("store").find("login",a.login_id)}})}(),function(){Citycrush.LoginsRoute=Ember.Route.extend({model:function(){return this.get("store").find("login")}})}(),function(){Citycrush.ObjectivesEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("objectives",a.objectives_id)}})}(),function(){Citycrush.ObjectivesRoute=Ember.Route.extend({model:function(a){return this.get("store").find("objectives",a.objectives_id)}})}(),function(){Citycrush.RegisterEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("register",a.register_id)}})}(),function(){Citycrush.RegisterRoute=Ember.Route.extend({model:function(){return this.store.find("user",Citycrush.currentUser)},actions:{register:function(){this.transitionTo("game")}}})}(),function(){Citycrush.ResultRoute=Ember.Route.extend({model:function(a){return{won:JSON.parse(a.yes)}}})}(),function(){Citycrush.SplashEditRoute=Ember.Route.extend({model:function(a){return this.get("store").find("splash",a.splash_id)}})}(),function(){Citycrush.SplashRoute=Ember.Route.extend({model:function(a){return this.get("store").find("splash",a.splash_id)}})}(),function(){Citycrush.SplashesRoute=Ember.Route.extend({model:function(){return this.get("store").find("splash")}})}(),function(){Citycrush.BoundTextFieldView=Ember.TextField.extend({valueBinding:"content.value",contentChanged:function(){this.get("controller").get("model").set(this.get("content").key,this.get("content").value)}.observes("content.value")})}(),function(){Citycrush.FightView=Em.View.extend({init:function(){this._super();var a=this;window.DeviceMotionEvent&&window.addEventListener("devicemotion",function(b){a.get("deviceMotionHandler").apply(a,[b])},!1)},lastEventTime:null,deviceMotionHandler:function(a){var b,c,d=a.accelerationIncludingGravity;b=[d.x,d.y,d.z];var e=a.rotationRate;c=[e.alpha,e.beta,e.gamma],Math.max.apply(Math,b.map(function(a){return Math.abs(a)}));var f=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]),g=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);Math.sqrt(c[0]*c[0]);var h=(new Date).getTime()-this.get("lastEventTime");h>2e3&&f>9&&g>14&&Math.abs(c[0])<6&&Math.abs(c[1])>16&&Math.abs(c[2])<6&&(this.set("lastEventTime",(new Date).getTime()),h=(new Date).getTime()-lastEventTime,this.get("controller").send("move",1)),h>2e3&&f>20&&Math.abs(b[0])>15&&Math.abs(b[1])>15&&Math.abs(b[2])>15&&(this.set("lastEventTime",(new Date).getTime()),h=(new Date).getTime()-lastEventTime,this.get("controller").send("move",2)),h>2e3&&2>f&&(this.set("lastEventTime",(new Date).getTime()),h=(new Date).getTime()-lastEventTime,this.get("controller").send("move",3))}})}(),function(){Citycrush.GameView=Em.View.extend({templateName:"game",didInsertElement:function(){var a=this;require(["esri/map","esri/layers/FeatureLayer","esri/dijit/LocateButton","esri/arcgis/utils","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","dojo/_base/Color","esri/graphic","dojo/_base/connect","esri/symbols/PictureMarkerSymbol","dojo/domReady!"],function(b,c,d,e,f,g,h,i,j,k){var l,m,n,o={enableHighAccuracy:!1,timeout:5e3,maximumAge:0},p=new k("/images/girl_char.png",40,40),q=function(){navigator.geolocation&&navigator.geolocation.watchPosition(x,function(){},o)},r=!0,s=(new esri.symbol.SimpleLineSymbol).setColor(new dojo.Color([0,0,0,1])),t=function(a,b){var c=a.x-b.x,d=Math.sin(u(a.y))*Math.sin(u(b.y))+Math.cos(u(a.y))*Math.cos(u(b.y))*Math.cos(u(c));return d=Math.acos(d),d=v(d),d=1e3*1.609344*1.1515*60*d},u=function(a){return a*Math.PI/180},v=function(a){return 180*(a/Math.PI)},w=function(b){console.log("clicked the map: ",b);var c,d,e,g,h,i=1e-4,j=1e-4,k=new f(b.x+i,b.y),l=new f(b.x,b.y+j),m=t(b,k),o=t(b,l);c=20;var p=c/m*i,q=c/o*j;d=new esri.geometry.Polygon,e=[],g=40,h=360/g;for(var r=1;g>=r;r++){var u=r*h*Math.PI/180;e.push([b.x+p*Math.cos(u),b.y+q*Math.sin(u)])}e.push(e[0]),d.addRing(e),n&&a.get("map").graphics.remove(n),n=new esri.Graphic(d,s),a.get("map").graphics.add(n),console.log("added a graphic")},x=function(b){m=new f(b.coords.longitude,b.coords.latitude),l&&a.get("map").graphics.remove(l),l=new i(m,p),a.get("map").graphics.add(l),w(m),r&&(a.get("map").centerAndZoom(l.geometry,16),r=!1),a.get("map").getLayersVisibleAtScale()[2]},y="722155c1b6b145e4897633674104006c",z=e.createMap(y,"map",{mapOptions:{autoResize:!1},ignorePopups:!1});z.addCallback(function(b){a.set("map",b.map),q();var c=a.get("map").getLayersVisibleAtScale()[2];j.connect(c,"onClick",function(b){var c,d=esri.geometry.webMercatorToGeographic(b.graphic.geometry);if(l){var e=l.geometry;c=t(d,e)<20}if(c&&l){a.get("controller").send("closeEnough",b.graphic.attributes.OBJECTID);var f=new Audio("/styles/round1fight.mp3");f.play()}else a.get("controller").send("closeEnough",-1)})})})}})}(),function(){Citycrush.RegisterEditView=Ember.View.extend({templateName:"register_edit"})}(),function(){Citycrush.RegisterView=Ember.View.extend({templateName:"register"})}(),function(){Citycrush.RegistersView=Ember.View.extend({templateName:"registers"})}(),function(){Citycrush.Router.map(function(){this.route("leaderboard"),this.route("game"),this.route("battle"),this.route("fight"),this.route("result",{path:"/result/:yes"}),this.route("register")})}();