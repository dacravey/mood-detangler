import DS from 'ember-data';

var Entry = DS.Model.extend({
    date: DS.attr('string'),
    mood: DS.attr('string'),
    moodRank: DS.attr('string'),
    activity: DS.attr('string'),
    activityRank: DS.attr('string'),
    sleep: DS.attr('string'),
    sleepRank: DS.attr('string'),
    food: DS.attr('string'),
    foodRank: DS.attr('string'),
    journal: DS.attr('string'),
    moodActivity: function() {
      var moodActivity = [];
      moodActivity.push(this.get('mood'));
      moodActivity.push(this.get('activity'));
      return moodActivity;

    }.property('mood', 'activity'),
    activityMood: function() {
      var activityMood = [];
      activityMood.push(this.get('activity'));
      activityMood.push(this.get('mood'));
      return activityMood;
    }.property('activity', 'mood')
});

Entry.reopenClass({
    FIXTURES: [
        {
            id: 1,
            mood: "happy",
            moodRank: 8,
            activity: "eating",
            activityRank: 5,
            journal: "Here is a journal entry",
            sleep: "8 hours",
            sleepRank: 9,
            food: "pizza",
            foodRank: 10,
            date: "Mon 3/3/15 07:35AM"
        },
        {
            id: 2,
            mood: "ecstatic",
            moodRank: 10,
            activity: "dancing",
            activityRank: 5,
            journal: "Here is a journal entry 2",
            sleep: "0 hours",
            sleepRank: 1,
            food: "shrooms",
            foodRank: 2,
            date: "Tue 3/4/15 03:00AM"
        },
        {
            id: 3,
            mood: "angry",
            moodRank: 3,
            activity: "waiting for tea to cool",
            activityRank: 5,
            journal: "damn hot tea",
            sleep: "3 hours",
            sleepRank: 2,
            food: "none",
            foodRank: 0,
            date: "Wed 3/4/15 09:05AM"
        },
        {
            id: 4,
            mood: "depressed",
            moodRank: 1,
            activity: "commuting",
            activityRank: 5,
            journal: "traffic jam.  i sucked at work today.  I think my boss hates me.",
            sleep: "3 hours",
            sleepRank: 2,
            food: "5 hour energy drink and a candy bar.",
            foodRank: 3,
            date: "Wed 3/4/15 7:15PM"
         },
         {
            id: 5,
            mood: "relieved",
            moodRank: 8,
            activity: "talking with my mom",
            activityRank: 5,
            journal: "My mom's health is doing better! Chemo is working!!!",
            sleep: "3 hours",
            sleepRank: 3,
            food: "Chicken salad with soup.",
            foodRank: 9,
            date: "Wed 3/4/15 8:45PM"
         },
         {
            id: 5,
            mood: "relieved",
            moodRank: 8,
            activity: "talking with my mom",
            activityRank: 5,
            journal: "My mom's health is doing better! Chemo is working!!!",
            sleep: "3 hours",
            sleepRank: 3,
            food: "Chicken salad with soup.",
            foodRank: 9,
            date: "Wed 3/4/15 8:45PM"
         },
         {
            id: 6,
            mood: "happy",
            moodRank: 8,
            activity: "breakfast",
            activityRank: 5,
            journal: "Having breakfast with my friend, talking about how happy I am that my mom's going to be ok.",
            sleep: "9 hours",
            sleepRank: 9,
            food: "omellet and hashbrowns",
            foodRank: 7,
            date: "Wed 3/5/15 8:15aM"
          },
         {
            id: 7,
            mood: "mellow",
            moodRank: 8,
            activity: "lunch",
            activityRank: 5,
            journal: "it's a beautiful day outside. I took a walk to the river and am sitting under a cherry tree.  Reminds me when i was a child without a care in the world.",
            sleep: "9 hours",
            sleepRank: 10,
            food: "shake for breakfast, chili dog for lunch",
            foodRank: 6,
            date: "Wed 3/5/15 12:35PM"
          },
          {
            id: 8,
            mood: "buoyant",
            moodRank: 9,
            activity: "jogging",
            activityRank: 5,
            journal: "actually went for a run today!  I haven't done that for a very long time. ",
            sleep: "9 hours",
            sleepRank: 10,
            food: "protein drink and power bar",
            foodRank: 7,
            date: "Wed 3/5/15 3:15PM"
          },
          {
            id: 9,
            mood: "silly",
            moodRank: 7,
            activity: "watching a comedy",
            activityRank: 5,
            journal: "Chilling out at home watching 'New Girl'",
            sleep: "9 hours",
            sleepRank: 10,
            food: "steak dinner with collard greens and mashed potatos",
            foodRank: 9,
            date: "Wed 3/5/15 9:45PM"
          },
           {
            id: 10,
            mood: "exhausted",
            moodRank: 5,
            activity: "trying to wake-up",
            activityRank: 5,
            journal: "I stayed up way to late last night. Friend called in a panic. Today is going to be rough",
            sleep: "5 hours",
            sleepRank: 5,
            food: "coffee and stale bagel",
            foodRank: 3,
            date: "Wed 3/6/15 7:15AM"
          },
           {
            id: 11,
            mood: "grumpy",
            moodRank: 4,
            activity: "working",
            activityRank: 5,
            journal: "Just had it out with my boss.  I hate this job. They have no idea what I do, so don't give me any credit, ever.",
            sleep: "5 hours",
            sleepRank: 5,
            food: "left over power bar, and leftover pizza",
            foodRank: 5,
            date: "Wed 3/6/15 1:45PM"
          },
          {
            id: 12,
            mood: "annoyed",
            moodRank: 4,
            activity: "commuting",
            activityRank: 5,
            journal: "Just had it out with my boss.  I hate this job. They have no idea what I do, so don't give me any credit, ever.",
            sleep: "5 hours",
            sleepRank: 5,
            food: "what food?",
            foodRank: 2,
            date: "Wed 3/6/15 6:15PM"
          },
          {
            id: 13,
            mood: "lethargic",
            moodRank: 4,
            activity: "playing on computer",
            activityRank: 5,
            journal: "I've decided I hate FB.  Everyone else seems so much more put together than I am.",
            sleep: "5 hours",
            sleepRank: 5,
            food: "taco bell fast food",
            foodRank: 6,
            date: "Wed 3/6/15 9:30PM"
          },
          {
            id: 14,
            mood: "chill",
            moodRank: 5.7,
            activity: "getting ready for work",
            activityRank: 5,
            journal: "Today I'm going to have a conversation with my boss's boss and ask for a vacation. If they say no, i'm outta here. I need a change. Maybe I'll move closer to my mom. ",
            sleep: "8 hours",
            sleepRank: 8,
            food: "egg sandwich and tea",
            foodRank: 7,
            date: "Wed 3/7/15 7:15AM"
          },
          {
            id: 15,
            mood: "elated",
            moodRank: 9,
            activity: "lunch",
            activityRank: 5,
            journal: "Had an epiphany today.  I'm leaving this rat race behind and starting over. My boss is a jerk and so is my manager. I don't have to take this treatment anymore! YAH!",
            sleep: "8 hours",
            sleepRank: 8,
            food: "pad thai",
            foodRank: 7,
            date: "Wed 3/7/15 3:00PM"
          },
          {
            id: 16,
            mood: "freaked out",
            moodRank: 5,
            activity: "writing emails",
            activityRank: 5,
            journal: "Well, quit my job.  I'm kinda freaked out, but I feel like it's the right choice.  Now I just have to stay away from the booze and cigarettes and try to stay healthy.  Here we gooooo...",
            sleep: "8 hours",
            sleepRank: 8,
            food: "Steak salad",
            foodRank: 8,
            date: "Wed 3/7/15 8:14PM"
          },
          {
            id: 17,
            mood: "elated",
            moodRank: 9,
            activity: "lunch",
            activityRank: 5,
            journal: "Had an epiphany today.  I'm leaving this rat race behind and starting over. My boss is a jerk and so is my manager. I don't have to take this treatment anymore! YAH!",
            sleep: "8 hours",
            sleepRank: 8,
            food: "pad thai",
            foodRank: 7,
            date: "Wed 3/7/15 3:00PM"
          },
          {
            id: 18,
            mood: "elated",
            moodRank: 9,
            activity: "lunch",
            activityRank: 5,
            journal: "Had an epiphany today.  I'm leaving this rat race behind and starting over. My boss is a jerk and so is my manager. I don't have to take this treatment anymore! YAH!",
            sleep: "8 hours",
            sleepRank: 8,
            food: "pad thai",
            foodRank: 7,
            date: "Wed 3/7/15 3:00PM"
          },
          {
            id: 19,
            mood: "annoyed",
            moodRank: 4,
            activity: "commuting",
            activityRank: 5,
            journal: "Just had it out with my boss.  I hate this job. They have no idea what I do, so don't give me any credit, ever.",
            sleep: "5 hours",
            sleepRank: 5,
            food: "what food?",
            foodRank: 2,
            date: "Wed 3/6/15 6:15PM"
          },
          {
            id: 20,
            mood: "annoyed",
            moodRank: 4,
            activity: "commuting",
            activityRank: 5,
            journal: "Just had it out with my boss.  I hate this job. They have no idea what I do, so don't give me any credit, ever.",
            sleep: "5 hours",
            sleepRank: 5,
            food: "what food?",
            foodRank: 2,
            date: "Wed 3/6/15 6:15PM"
          },
          {
            id: 21,
            mood: "annoyed",
            moodRank: 4,
            activity: "working",
            activityRank: 5,
            journal: "Just had it out with my boss.  I hate this job. They have no idea what I do, so don't give me any credit, ever.",
            sleep: "5 hours",
            sleepRank: 5,
            food: "what food?",
            foodRank: 2,
            date: "Wed 3/6/15 6:15PM"
          }
    ]
});

export default Entry;
