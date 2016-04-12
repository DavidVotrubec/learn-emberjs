import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  year: DS.attr(),
  language: DS.attr(),
  desc: DS.attr(),
});
