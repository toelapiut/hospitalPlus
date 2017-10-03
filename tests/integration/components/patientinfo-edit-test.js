import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('patientinfo-edit', 'Integration | Component | patientinfo edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{patientinfo-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#patientinfo-edit}}
      template block text
    {{/patientinfo-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
