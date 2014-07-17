var tar = require('tar'),
    parse = tar.Parse(),
    crypto = require('crypto'),
    through = require('through'),
    zlib = require('zlib'),
    cipher = process.argv[2],
    pw = process.argv[3];

parse.on('entry', function (e) {
  if (e.type !== 'File') return;

  var h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(through(null, end)).pipe(process.stdout);

  function end () {
    this.queue(' ' + e.path + '\n');
  }
})

process.stdin
  .pipe(crypto.createDecipher(cipher, pw))
  .pipe(zlib.createGunzip())
  .pipe(parse);
