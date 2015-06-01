var cc = require('..')
var tap = require('tap')

//throw on invalid json
tap.throws(function () {
  cc(__dirname + '/broken.json')
})
