App.Battlefield = DS.Model.extend({
    position: DS.belongsTo('position'),
    title: DS.attr('string'),
    start: DS.attr('date'),
    stop: DS.attr('date'),
    challenges: DS.hasMany('challenge')
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
];