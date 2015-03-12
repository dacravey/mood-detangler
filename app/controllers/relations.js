import Ember from 'ember';

export default Ember.ArrayController.extend({

  moodsActivities: function() {
    var entries = this.get('model');
    return entries.map(function(entry) {
      return entry.get('moodActivity');
    });
  }.property(),

  activitiesMoods: function() {
    var entries = this.get('model');
    return entries.map(function(entry) {
      return entry.get('activityMood');
    });
  }.property(),

  actions: {

    commonMoodActivityPairs: function() {
      var moodsActivities = this.get('moodsActivities');
      var activitiesMoods = this.get('activitiesMoods');
      // var sortedActivitiesMoods = activitiesMoods.sort();
      // var sortedMoodsActivities = moodsActivities.sort();
      var len = moodsActivities.length;

      var countedPairsMA = {};
      for(var i = 0; i < len; i++) {
        countedPairsMA[moodsActivities[i]] = ((countedPairsMA[moodsActivities[i]] || 0) + 1);
      }
      console.log(countedPairsMA);



      var countedPairsAM = {};
      for(var i = 0; i < len; i++) {
        countedPairsAM[activitiesMoods[i]] = ((countedPairsAM[activitiesMoods[i]] || 0) + 1);
      }
      console.log(countedPairsAM);

      // var dupePairsMA = [];
      // for (i = 0; i < len - 1; i++) {
      //     if (sortedMoodsActivities[i + 1][0] === sortedMoodsActivities[i][0]) {
      //       dupePairsMA.push(sortedMoodsActivities[i]);
      //     }
      // }
      // console.log(dupePairsMA);
      //
      // var uniquePairsMA = [];
      // for(i = 0; i < len;) {
      //   for(var k = i; k < len && ((sortedMoodsActivities[k][0] === sortedMoodsActivities[i][0]) && (sortedMoodsActivities[k][1] === sortedMoodsActivities[i][1])); k++) {}
      //   if(k === i + 1) {
      //     uniquePairsMA.push(sortedMoodsActivities[i]);
      //   }
      //   i = k;
      // }
      // console.log(uniquePairsMA);

    }


  }

});
