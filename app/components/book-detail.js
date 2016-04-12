import Ember from 'ember';

export default Ember.Component.extend({
    isDetail: false,
    actions: {
        showDetail() {
            this.set('isDetail', true);
        },
        hideDetail() {
            this.set('isDetail', false);
        }
    },
    
    alertMsg() {
        alert('zlo ' + this.get('id'));
    }
});
