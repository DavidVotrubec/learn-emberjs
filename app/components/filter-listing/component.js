import Ember from 'ember';

export default Ember.Component.extend({
    filter: null,
    filteredList: null,
    
    actions: {
        autoComplete() {
            // pul the autocoplete method from the component properties
            this.get('autoComplete')(this.get('filter'));
        },
        search() {
            // pul the search method from the component properties
            this.get('search')(this.get('filter'));
        },
        choose(city) {
            this.set('filter', city);
        }
    }
});
