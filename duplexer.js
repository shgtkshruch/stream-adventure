var spawn = require('child_process').spawn,
    duplex = require('duplexer');

module.exports = function (cmd, args) {
  var ps = spawn(cmd, args);
  return duplex(ps.stdin, ps.stdout) ;
};
