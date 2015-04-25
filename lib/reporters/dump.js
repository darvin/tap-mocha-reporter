exports = module.exports = Dump
var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

function Dump(runner) {
  Base.call(this, runner);

  var events = [
    'start',
    'version',
    'end',
    'suite',
    'suite end',
    'test',
    'pending',
    'pass',
    'fail',
    'test end',
  ];

  var i = process.argv.indexOf('dump')
  if (i !== -1) {
    var args = process.argv.slice(i)
    if (args.length)
      events = args
  }

  events.forEach(function (ev) {
    runner.on(ev, function () {
      var args = [].concat.apply([ev], arguments)
      console.log.apply(console, args)
    })
  })
}