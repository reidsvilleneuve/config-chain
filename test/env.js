var cc = require('..')
require('tap').deepEqual({
  hello: true
}, cc.env('test_', {
  'test_hello': true,
  'ignore_this': 4,
  'ignore_test_this_too': []
}))
