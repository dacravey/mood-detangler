import Ember from 'ember';

export default Ember.ArrayController.extend({
// Relationship between Moods and Activities.

  moodsActivities: function() {
      // Need to bring in data from entries model.
    var entries = this.get('model');
      // Need to add those key:value pairs into a custom array (var moodsActivities)
    return entries.map(function(entry) {
      return entry.get('moodActivity');
    });
  }.property(),

  actions: {

    pullData: function() {
  // Need to have logic that scans the array for duplicate entries
    // ie: [ [mood1, activity1], [mood1, activity1] ] = 2 entries for [mood1, activity1]
      console.log(this.get('moodsActivities'));
      console.log(this.get('moodsActivities')[0]);
      console.log(this.get('model'));
    }

  // Need to have logic that scans the array for frequency of individual moods and activities.
  }

});





// lol


// var entries = this.get('model'); // ? Is this getting the whole model?

// var entryActivities = this.get('Detangler.Entry.activity');
// var moodsActivities = [];
    // -- Have experimented with:
      // Detangler.Entry.mood,
      // app.Entry.mood,
      // app.Model.Entry.mood,
      // app.Entry.mood,
      // Entry.mood

// var moodString = "";
// var activityString = "";
// var singleMoodActivity = [];

// entryMoods.forEach(function(mood) {
//   moodString += mood;
// });
//
// entryActivities.forEach(function(activity) {
//   activityString += activity;
// });
//
// singleMoodActivity.push(moodString, activityString);


// moodsActivities.push(singleMoodActivity);

// entries.forEach(function(entry) {
//   debugger;
//   moodsActivities.push(entry.get('moodActivity'));
// });
