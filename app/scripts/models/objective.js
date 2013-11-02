App.Objective = DS.Model.extend({
    objectiveType: belongsTo('objectiveType'),
    user: belongsTo('user'),
    started: attr('date'),
    obtained: attr('date'),
    abandoned: attr('date')
});

App.Objective.FIXTURES = [
    {
        objectiveType: 1,
        user: 1,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 2,
        user: 1,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 3,
        user: 1,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 4,
        user: 1,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 1,
        user: 2,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 2,
        user: 2,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 3,
        user: 2,
        started: null,
        obtained: null,
        abandonded: null
    },
    {
        objectiveType: 4,
        user: 2,
        started: null,
        obtained: null,
        abandonded: null
    }     
] 