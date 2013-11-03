Citycrush.Land = DS.Model.extend({
    lat: DS.attr('number'),
    long: DS.attr('number'),
    name: DS.attr('string'),
    radius: DS.attr('number'),
    kingdom: DS.belongsTo('kingdom'),
    esriMapObjectId: DS.attr('string')
});

Citycrush.Land.FIXTURES = [
    {
        id: 1,
        lat: 53.2218,
        long: 6.5544,
        name: "dfsdf",
        radius: 0,
        kingdom: 1,
        esriMapObjectId: "0"
    },
    {
        id: 2,
        lat: 53.2219,
        long: 6.5545,
        name: "sdgasgasgsdg",
        radius: 0,
        kingdom: 2,
        esriMapObjectId: "0"
    }
]