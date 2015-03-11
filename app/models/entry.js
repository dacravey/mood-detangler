import DS from 'ember-data';

var Entry = DS.Model.extend({
    mood: DS.attr('string'),
    activity: DS.attr('string'),
    journal: DS.attr('string'),
    sleep: DS.attr('string'),
    food: DS.attr('string'),
    date: DS.attr('string')
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
        },
        {
            id: 4,
            mood: "depressed",
            activity: "driving home from work",
            journal: "traffic jam.  i sucked at work today.  I think my boss hates me.",
            sleep: "3 hours",
            food: "5 hour energy drink and a candy bar.",
            date: "Wed 3/5/15 7:15PM"
         },
         {
            id: 5,
            mood: "relieved",
            activity: "talkign with my mom",
            journal: "My mom's health is doing better! Chemo is working!!!",
            sleep: "3 hours",
            food: "Chicken salad with soup.",
            date: "Wed 3/5/15 8:45PM"
         },
         {
            id: 6,
            mood: "happy",
            activity: "breakfast",
            journal: "Having breakfast with my friend, talking about how happy I am that my mom's going to be ok.",
            sleep: "9 hours",
            food: "omellet and hashbrowns",
            date: "Wed 3/5/15 8:45aM"
          },
         {
            id: 7,
            mood: "mellow",
            activity: "lunch break",
            journal: "it's a beautiful day outside. I took a walk to the river and am sitting under a cherry tree.  Reminds me when i was a child without a care in the world.",
            sleep: "9 hours",
            food: "shake for breakfast, chili dog for lunch",
            date: "Wed 3/5/15 12:35PM"
          },
          {
            id: 8,
            mood: "buoyant",
            activity: "jogging",
            journal: "actually went for a run today!  I haven't done that for a very long time. ",
            sleep: "9 hours",
            food: "energy drink",
            date: "Wed 3/5/15 3:15PM"
          }
    ]
});

export default Entry;
