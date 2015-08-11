var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(8)
  var f = require(path.resolve(args[0]))
  t.ok(f('123.jpg'), '123.jpg')
  t.ok(f('123.jpeg'), '123.jpeg')
  t.notOk(f('abc.jpeg'), 'abc.jpeg')
  t.notOk(f('123abc.jpeg'), '123abc.jpeg')
  t.notOk(f('123'), '123')
  t.notOk(f('123.jpg2000'), '123.jpg2000')
  t.notOk(f('123.png'), '123.png')
  t.notOk(f('.jpeg'), '.jpeg')
})
