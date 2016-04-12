import Ember from 'ember';

const books = [
    {
        id: '1',
        name: 'EmberJS',
        author: 'Yehuda Katz'
    },
    {
        id: '2',
        name: 'Bible',
        author: 'ton of people'
    },
]

export default Ember.Route.extend({
    model() {
        return books;
    }
});
