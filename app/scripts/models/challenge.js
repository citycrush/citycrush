App.Challenge = DS.Model.extend({
    battlefield: belongsTo('battlefield'),
    moves: hasMany('moves'),
    challenger: belongsTo('user'),
    timestamp: attr('date')
});

App.Challenges.FIXTURES = [
    {
        id: 1,
        battlefield: 1,
        moves: [],
        challenger: 1,
        timestamp: null
    },
    {
        id: 2,
        battlefield: 1,
        moves: [],
        challenger: 2,
        timestamp: null
    },
    {
        id: 3,
        battlefield: 2,
        moves: [],
        challenger: 1,
        timestamp: null
    }

]