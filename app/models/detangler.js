import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            mood: "bloated",
            activity: "eating",
            journal: "Here is a journal entry",
            sleep: "8 hours",
            food: "pizza"
        },
        {
            id: 2,
            mood: "ecstatic",
            activity: "dancing",
            journal: "Here is a journal entry 2",
            sleep: "0 hours",
            food: "shrooms"
        },
        {
            id: 3,
            mood: "angry",
            activity: "waiting for tea to cool",
            journal: "damn hot tea",
            sleep: "3 hours",
            food: "none"
        }
    ]
});
