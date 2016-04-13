import Ember from 'ember';

export default Ember.Controller.extend({
    filteredList: null,
    actions: {
        autoComplete(param) {
            if (param !== '') {
                this.store.query('book', { name: param }).then((result) => {
                    this.set('filteredList', result);
                });
            } else {
                this.set('filteredList', null);
            }
        },
        search(param) {
            if (param !== '') {
                this.store.query('book', { name: param }).then((result) => {
                    this.set('model', result);
                });
            } else {
                this.store.findAll('book').then((result) => {
                    this.set('model', result);
                });
            }
        }
    }
});
