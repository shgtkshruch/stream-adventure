var ws = require('websocket-stream'),
    stream = ws('ws://localhost:8000');

stream.end('hello\n');
