var fs = require('fs');
var gql = require('graphql-tag');

require.extensions['.graphql'] = function(module, filename) {
  var query = fs.readFileSync(filename, { encoding: 'utf8' });
  var parsedQuery = gql`${query}`
  var code = `module.exports = ${JSON.stringify(parsedQuery)}`;
  return module._compile(code, filename);
}

require.extensions['.gql'] = require.extensions['.graphql'];
