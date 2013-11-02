Citycrush.Position = DS.Model.extend({
    lat: DS.attr('number'),
    long: DS.attr('number'),
    timestamp: DS.attr('date')
});

Citycrush.Position.FIXTURES = [
    {
        id: 1,
        lat: 53.2218,
        long: 6.5544,
        timestap: null
    },
    {
        id: 2,
        lat: 53.2219,
        long: 6.5545,
        timestap: null
    },
    {
        id: 3,
        lat: 53.2217,
        long: 6.5543,
        timestap: null
    },
    {
        id: 4,
        lat: 53.2220,
        long: 6.5542,
        timestap: null
    },
    {
        id: 5,
        lat: 53.2221,
        long: 6.5543,
        timestap: null
    },
    {
        id: 6,
        lat: 53.2224,
        long: 6.5543,
        timestap: null
    }
];