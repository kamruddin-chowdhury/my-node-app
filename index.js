const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Backend NodeJS still istening on Port 3000\n');
});

server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
});

