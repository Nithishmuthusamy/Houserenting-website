import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Route | index/details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index/details');
    assert.ok(route);
  });
});
