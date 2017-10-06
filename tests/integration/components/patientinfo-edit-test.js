import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('patientdisplay-edit', 'Integration | Component | patientdisplay edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{patientdisplay-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#patientdisplay-edit}}
      template block text
    {{/patientdisplay-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
