var cc = require('..')

require('tap').doesNotThrow(function () {
  cc(__dirname, 'non_existing_file')
})
