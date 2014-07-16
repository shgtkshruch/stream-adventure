var concat = require('concat-stream'),
    write = concat(function(data) {
      var d = data.toString().split('').reverse().join('');
      console.log(d);
    });

process.stdin.pipe(write);
