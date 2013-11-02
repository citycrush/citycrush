app.ObjectiveType = DS.Model.extend({
    title: attr('string'),
    action: attr('string'),
    postion: belongsTo('position'),
    payoff: attr('number')
});


App.ObjectiveType.FIXTURES = [
    {
        id: 1,
        title: "the hammer",
        action: "hammer",
        position: 1,
        payoff: 20
    },
    {
        id: 2,
        title: "do the wave",
        action: "wave",
        position: 2,
        payoff: 30
    },
    {
        id: 3,
        title: "swirling",
        action: "swirl",
        position: 3,
        payoff: 40
    }
    {
        id: 4,
        title: "oelahlah",
        action: "oelahlah",
        position: 4,
        payoff: 50
    }
] 