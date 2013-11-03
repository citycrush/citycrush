Citycrush.Game = DS.Model.extend({
    map: DS.belongsTo('map'),
    kingsdoms: DS.hasMany('kingdom'),
    lands: DS.hasMany('land')
});

Citycrush.Game.FIXTURES = [
    {
        id: 1,
        map: 1,
        kingdoms: [1,2],
        lands: [1,2]
    }
];