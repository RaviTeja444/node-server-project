const httpmodule = require('http');

const hostname = '192.168.0.110';
const portNo = 3000;

const server = httpmodule.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is sample Nodejs App developed by Ravi Teja Pagidoju');
});

server.listen(portNo, hostname, () => {
  console.log(`Server running at http://${hostname}:${portNo}/`);
});