var fs = require('fs');

require.extensions['.graphql'] = function(module, filename) {
  var query = fs.readFileSync(filename, { encoding: 'utf8' });
  var code = 'module.exports = ' + JSON.stringify(query);
  return module._compile(code, filename);
}
