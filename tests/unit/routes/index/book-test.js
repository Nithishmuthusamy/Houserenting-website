import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Route | index/book', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index/book');
    assert.ok(route);
  });
});
