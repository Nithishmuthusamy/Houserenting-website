import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Controller | cardview', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cardview');
    assert.ok(controller);
  });
});
