import DS from 'ember-data';

var Entry = DS.Model.extend({
    mood: DS.attr('string'),
    activity: DS.attr('string'),
    journal: DS.attr('string'),
    sleep: DS.attr('string'),
    food: DS.attr('string'),
    date: DS.attr('string'),
    moodActivity: function() {
      var moodActivity = [];
      return moodActivity.push(this.get('mood'), this.get('activity'));
    }.property('mood', 'activity')
});

Entry.reopenClass({
    FIXTURES: [
        {
            id: 1,
            mood: "bloated",
            activity: "eating",
            journal: "Here is a journal entry",
            sleep: "8 hours",
            food: "pizza",
            date: "Mon 3/3/15 07:35AM"
        },
        {
            id: 2,
            mood: "ecstatic",
            activity: "dancing",
            journal: "Here is a journal entry 2",
            sleep: "0 hours",
            food: "shrooms",
            date: "Tue 3/4/15 03:00AM"
        },
        {
            id: 3,
            mood: "angry",
            activity: "waiting for tea to cool",
            journal: "damn hot tea",
            sleep: "3 hours",
            food: "none",
            date: "Wed 3/4/15 09:05AM"
        }
    ]
});

export default Entry;
