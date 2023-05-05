import { module, test } from 'qunit';
import { setupTest } from 'day-1/tests/helpers';

module('Unit | Route | students', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:students');
    assert.ok(route);
  });
});
