App.Objective = DS.Model.extend({
    objectiveType: belongsTo('objectiveType'),
    user: belongsTo('user'),
    started: attr('date'),
    obtained: attr('date'),
    abondoned: attr('date')
});

App.Objective.FIXTURES = [
    
    
    
    
    
    
] 