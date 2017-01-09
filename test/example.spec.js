var assert  = require('assert');
var example = require('./example');

describe('example()', function() {
  it('returns expected raw graphql string', function() {
    var expectedQuery = 'can_be_anything\n';
    var returnedQuery = example();

    assert.equal(expectedQuery === returnedQuery, true);
  });
});
