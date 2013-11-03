Citycrush.Game = DS.Model.extend({
    map: DS.belongsTo('map'),
    battlefields: DS.hasMany('battlefield')
});

Citycrush.Game.FIXTURES = [
    {
        id: 1,
        map: 1,
        battlefields: [1,2]
    }
];