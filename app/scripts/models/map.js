App.Map = DS.Model.extend({
    title: DS.attr('string'),
    esriMapId: DS.attr('string')
});

App.Objective.FIXTURES = [
    {
        id: 1,
        title: "Het Noorderplantsoen",
        esriMapId: "722155c1b6b145e4897633674104006c"
    }
]; 