App.Battlefield = DS.Model.extend({
    position: belongsTo('position'),
    title: attr('string'),
    start: attr('date'),
    stop: attr('date'),
    challenges: hasMany('challenge')
});

App.Battlefield.FIXTURES = [
    {
        id: 1,
        position: 1,
        title: "sdfasdf",
        start: null,
        stop: null,
        challenges: [1,2]
        
    },
    {
        id: 2,
        position: 2,
        title: "sdfasdf",
        start: null,
        stop: null,
        challenges: [3]
    }
]