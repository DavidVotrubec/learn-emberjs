import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  year: DS.attr(),
  language: DS.attr(),
  desc: DS.attr(),
  binding: DS.attr(),
  
  fullName: Ember.computed('name', 'author', 'year', function (params) {
        return `Name of the books is ${this.get('name')}, written by ${this.get('author')} in ${this.get('year')}`;
    })
});
