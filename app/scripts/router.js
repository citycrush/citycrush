Citycrush.Router.map(function () {  
    this.route('leaderboard');  
    this.route('game');
    this.route('battle');
    this.route('fight');
    this.route('result', {path: '/result/:yes'} );
    this.route('register');
});
