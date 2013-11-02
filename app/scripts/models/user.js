App.User = DS.Model.extend({
    persona: attr('string'),
    name: attr('string'),
    avatar: attr('string'),
    currentPosition: belongsTo('position'),
    trace: hasMany('position'),
    objectives: hasMany('objective'),
    coins: attr('number')
});

App.User.FIXTURES = [
    
    
    
    
    
    
] 