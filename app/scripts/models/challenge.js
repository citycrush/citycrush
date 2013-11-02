Citycrush.Challenge = DS.Model.extend({
    battlefield: DS.belongsTo('battlefield'),
    moves: DS.hasMany('moves'),
    challenger: DS.belongsTo('user'),
    timestamp: DS.attr('date')
});

Citycrush.Challenge.FIXTURES = [
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

];