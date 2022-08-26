import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Transform | housetransform', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:housetransform');
    assert.ok(transform);
  });
});
