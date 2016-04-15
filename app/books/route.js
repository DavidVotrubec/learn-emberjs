import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('book');
    },
    
    actions: {
        save: () => {
            alert('saving');
        }
    },
    
    redirect: function () {
        this.transitionTo('books.list');
    }
});
