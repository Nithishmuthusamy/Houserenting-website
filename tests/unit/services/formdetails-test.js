import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Service | formdetails', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:formdetails');
    assert.ok(service);
  });
});
