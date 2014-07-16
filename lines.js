var split = require('split'),
    through = require('through'),
    lineCount = 1,
    tr = through(function(buf) {
          var line = buf.toString();
          this.queue(lineCount % 2 === 1
            ? line.toLowerCase() + '\n'
            : line.toString().toUpperCase() + '\n'
          );
          lineCount++;
        });

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
