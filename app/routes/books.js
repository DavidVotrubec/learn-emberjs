import Ember from 'ember';

const books = [
    {
        Id: '1',
        Name: 'EmberJS',
        Author: 'Yehuda Katz'
    },
    {
        Id: '2',
        Name: 'Bible',
        Author: 'ton of people'
    },
]

export default Ember.Route.extend({
    model() {
        return books;
    }
});
