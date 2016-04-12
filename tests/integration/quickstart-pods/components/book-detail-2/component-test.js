import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('book-detail-2', 'Integration | Component | book detail 2', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{book-detail-2}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#book-detail-2}}
      template block text
    {{/book-detail-2}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
