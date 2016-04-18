import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('book');
    },
    
    actions: {
        save() {
            var post = this.store.createRecord('book', {
                name: 'new book ' + new Date(),
                author: 'David Votrubec'
            });

            post.save().then(() => {
                this.transitionTo('books.list');
            });
        }
    },
    
    redirect: function () {
        this.transitionTo('books.list');
    }
});
