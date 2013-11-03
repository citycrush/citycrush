Citycrush.User = DS.Model.extend({
    email: DS.attr('string'),
    name: DS.attr('string'),
    avatar: DS.attr('string'),
    currentPosition: DS.belongsTo('position'),
    trace: DS.hasMany('position'),
    coins: DS.attr('number'),
    challengesLost: DS.attr('number'),
    challengesWon: DS.attr('number'),
    kingof: DS.hasMany('kingdom')
});

Citycrush.User.FIXTURES = [
    {
        id: 1,
        email: "remko.boschker@gmail.com",
        name: "user1",
        avatar: "/images/avatars/user1.png",
        currentPosition: 3,
        trace: [3],
        coins: 45,
        challengesLost: 0,
        challengesWon: 5,
        kingof: [1]
    },
    {
        id: 2,
        email: "user2@citycrush.co",
        name: "user2",
        avatar: "/images/avatars/user2.png",
        currentPosition: 4,
        trace: [4],
        coins: 20,
        challengesLost: 3,
        challengesWon: 1,
        kingof: [2]
    }
];