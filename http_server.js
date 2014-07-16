var http = require('http'),
    through = require('through'),
    port = process.argv[2];

server = http.createServer(function(req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n');
  
  req.pipe(through(function(buf) {
    this.queue(buf.toString().toUpperCase());
  })).pipe(res)

});

server.listen(port);
