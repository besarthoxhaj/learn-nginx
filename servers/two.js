'use strict';

var http = require('http');
var PORT_TWO = process.env.PORT_TWO || 3002;

http.createServer((req, res) => {
  console.log('Req two');
  res.end('Hello from Two');
}).listen(PORT_TWO, () => {
  console.log(`Server one running on ${PORT_TWO}`);
});
