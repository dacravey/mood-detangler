import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createEntry: function() {
            // Create the new Entry model
            var entry = this.store.createRecord('entry', {
                mood: this.get('mood'),
                activity: this.get('activity'),
                journal: this.get('journal'),
                sleep: this.get('sleep'),
                food: this.get('food'),
                date: new Date()
            });

            // Clear the "New Entry" text field
            this.set('mood', null);
            this.set('activity', null);
            this.set('journal', null);
            this.set('sleep', null);
            this.set('food', null);

            // Save the new model
            entry.save();
            this.transitionToRoute('entries');
        }
    }
});
