var duplex = require('duplexer'),
    through = require('through');

module.exports =  function (counter) {
  var counts = {},
      input = through(write, end);
  return duplex(input, counter);

  function write (row) {
    counts[row.country] = (counts[row.country] || 0) + 1;
  }

  function end () {
    counter.setCounts(counts);
  }
}
