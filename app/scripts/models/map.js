App.Map = DS.Model.extend({
    titel = attr('string'),
    esriMapId = attr('string)
});

App.Objective.FIXTURES = [
    {
        titel: "Het Noorderplantsoen",
        esriMapId: "722155c1b6b145e4897633674104006c"
    }
] 