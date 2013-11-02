Citycrush.Router.map(function () {
  
  this.resource('leaderboard', { path: '/leaderboard/:leaderboard_id' });
  this.resource('leaderboard.edit', { path: '/leaderboard/:leaderboard_id/edit' });
    
  this.resource('login', { path: '/login/:login_id' });
  this.resource('login.edit', { path: '/login/:login_id/edit' });
  
  this.resource('objectives');
  this.resource('objective', { path: '/objective/:objective_id' });
  this.resource('objective.edit', { path: '/objective/:objective_id/edit' });
  
  this.resource('objectives_edit');
  this.resource('objectives_edit', { path: '/objectives_edit/:objectives_edit_id' });
  this.resource('objectives_edit.edit', { path: '/objectives_edit/:objectives_edit_id/edit' });
  
  
  this.resource('splash', { path: '/splash/:splash_id' });
  
});
