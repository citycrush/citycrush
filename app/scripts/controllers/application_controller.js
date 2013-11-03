Citycrush.ApplicationController = Ember.Controller.extend({
    init: function () {
        this._super();
        var zis = this;
        // hack login

        Citycrush.currentUser = {
            id: 1,
            email: "remko.boschker@gmail.com",
            name: "",
            avatar: "/images/avatars/user1.png",
            currentPosition: 3,
            trace: [3],
            coins: 45,
            challengesLost: 0,
            challengesWon: 5,
            kingof: [1]
        };

        var currentUser = {};//Citycrush.currentUser;

        function simpleXhrSentinel(xhr) {
            return true;
//            return function () {
//                if (xhr.readyState == 4) {
//                    if (xhr.status == 200) {
//                        // reload page to reflect new login state
//                        window.location.reload();
//                    } else {
//                        navigator.id.logout();
//                        alert("XMLHttpRequest error: " + xhr.status);
//                    }
//                }
//            }
        }

        function verifyAssertion(assertion) {
            // Your backend must return HTTP status code 200 to indicate successful
            // verification of user's email address and it must arrange for the binding
            // of currentUser to said address when the page is reloaded
//            var xhr = new XMLHttpRequest();
//            xhr.open("POST", "/xhr/sign-in", true);
//            // see http://www.openjs.com/articles/ajax_xmlhttp_using_post.php
//            var param = "assertion=" + assertion;
//            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//            xhr.setRequestHeader("Content-length", param.length);
//            xhr.setRequestHeader("Connection", "close");
//            xhr.send(param); // for verification by your backend
//
//            xhr.onreadystatechange = simpleXhrSentinel(xhr);
              zis.send('afterLogin');
        }

        function signoutUser() {
            // Your backend must return HTTP status code 200 to indicate successful
            // sign out (usually the resetting of one or more session variables) and
            // it must arrange for the binding of currentUser to 'null' when the page
            // is reloaded
//            var xhr = new XMLHttpRequest();
//            xhr.open("GET", "/xhr/sign-out", true);
//            xhr.send(null);
//            xhr.onreadystatechange = simpleXhrSentinel(xhr);
        }

        // Go!
        navigator.id.watch({
            loggedInUser: currentUser,
            onlogin: verifyAssertion,
            onlogout: signoutUser
        });
    }

});