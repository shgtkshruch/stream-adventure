var through = require('through'),
    tr = through(write);

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}

process.stdin.pipe(tr).pipe(process.stdout);
