Citycrush.Kingdom = DS.Model.extend({
    land: DS.belongsTo('land'),
    title: DS.attr('string'),
    start: DS.attr('date'),
    stop: DS.attr('date'),
    king: DS.belongsTo('user'),
    key: DS.attr('string')
});

Citycrush.Kingdom.FIXTURES = [
    {
        id: 1,
        land: 1,
        title: "Robert-Jan",
        start: null,
        stop: null,
        key: "[1,2,4]",
        king: 1
    },
    {
        id: 2,
        position: 2,
        title: "sdfasdf",
        start: null,
        stop: null,
        key: "[3,4,1]",
        king: 2
    }
];