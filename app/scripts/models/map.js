App.Map = DS.Model.extend({
    title = attr('string'),
    esriMapId = attr('string')
});

App.Objective.FIXTURES = [
    {
        id: 1,
        title: "Het Noorderplantsoen",
        esriMapId: "722155c1b6b145e4897633674104006c"
    }
] 