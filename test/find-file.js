
var fs = require('fs')
  , tap = require('tap')
  , objx = {
    rand: Math.random()
  }

fs.writeFileSync('/tmp/random-test-config.json', JSON.stringify(objx))

var cc = require('../')
var path = cc.find('tmp/random-test-config.json')

tap.equal(path, '/tmp/random-test-config.json')
