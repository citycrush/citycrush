app.ObjectiveType = DS.Model.extend({
    title: attr('string'),
    action: attr('string'),
    postion: belongsTo('position'),
    payoff: attr('number')
});


App.ObjectiveType.FIXTURES = [
    {
        id: 1,
        title: "jump to it",
        action: "shake",
        position: 1,
        payoff: 20
    },
    {
        id: 2,
        title: "do the wave",
        action: "tilt",
        position: 2,
        payoff: 30
    }
] 