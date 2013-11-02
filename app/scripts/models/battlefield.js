App.Battlefield = DS.Model.extend({
    position: belongsTo('position'),
    title: attr('string'),
    start: attr('date'),
    stop: attr('date')
});

App.Battlefield.FIXTURES = [
    {
        id: 1,
        position: 1,
        title: "sdfasdf",
        start: null,
        stop: null
    },
    {
        id: 2,
        position: 2,
        title: "sdfasdf",
        start: null,
        stop: null
    },
    {
        id: 3,
        position: 3,
        title: "sdfasdf",
        start: null,
        stop: null
    }
]