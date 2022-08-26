import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Model | house1', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('house1', {});
    assert.ok(model);
  });
});
