import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Service | form-details', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:form-details');
    assert.ok(service);
  });
});
