import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createEntry: function() {
            // Create the new Entry model
            var entry = this.store.createRecord('entry', {
                date: new Date(),
                mood: this.get('mood'),
                moodRank: this.get('moodRank'),
                activity: this.get('activity'),
                activityRank: this.get('activityRank'),
                sleep: this.get('sleep'),
                sleepRank: this.get('sleepRank'),
                food: this.get('food'),
                foodRank: this.get('foodRank'),
                journal: this.get('journal')
            });

            // Clear the "New Entry" text field
            this.set('mood', null);
            this.set('moodRank', null);
            this.set('activity', null);
            this.set('activityRank', null);
            this.set('sleep', null);
            this.set('sleepRank', null);
            this.set('food', null);
            this.set('foodRank', null);
            this.set('journal', null);

            // Save the new model
            entry.save();
            this.transitionToRoute('entries');
        }
    }
});
