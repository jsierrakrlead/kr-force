import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | everyone', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:everyone');
    assert.ok(route);
  });
});
