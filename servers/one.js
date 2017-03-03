'use strict';

var http = require('http');
var PORT_ONE = process.env.PORT_ONE || 3001;

http.createServer((req, res) => {
  console.log('Req one');
  res.end('Hello from One');
}).listen(PORT_ONE, () => {
  console.log(`Server one running on ${PORT_ONE}`);
});
