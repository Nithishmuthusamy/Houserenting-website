import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Route | tummy2', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tummy2');
    assert.ok(route);
  });
});
