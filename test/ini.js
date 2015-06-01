var cc = require('..')
var INI = require('ini')
var tap = require('tap')

function test(obj) {

  var _json, _ini
  var json = cc.parse (_json = JSON.stringify(obj))
  var ini = cc.parse (_ini = INI.stringify(obj))
  tap.deepEqual(json, ini)
}


test({hello: true})
