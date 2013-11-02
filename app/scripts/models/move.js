Citycrush.Move = DS.Model.extend({
    title: DS.attr('string'),
    beats: DS.hasMany('moves')
});

Citycrush.Move.FIXTURES = [
    {
        id: 1,
        title: "wave",
        beats: [3,4,5]
    },
    {
        id: 2,
        title: "swirl",
        beats: [4,5,1]
    },
    {
        id: 3,
        title: "hammer",
        beats: [5,1,2]
    },
    {
        id: 4,
        title: "oelahlah",
        beats: [1,2,3]
    },
    {
        id: 5,
        title: "italian",
        beats: [2,3,4]
    }
];