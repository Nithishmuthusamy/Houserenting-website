import { module, test } from 'qunit';
import { setupTest } from 'houserental/tests/helpers';

module('Unit | Controller | index/book', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:index/book');
    assert.ok(controller);
  });
});
