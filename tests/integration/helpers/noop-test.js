import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | noop', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('works', async function(assert) {
    this.setProperties({
      counter: 0,
      condition: false,
      action: () => this.counter++,
    });

    await render(hbs`
      <button {{on 'click' (if this.condition this.action (noop))}}>
        Click me
      </button>
    `);

    await click('button');

    assert.equal(this.counter, 0);

    this.setProperties({
      condition: true,
    });

    await click('button');

    assert.equal(this.counter, 1);
  });
});
