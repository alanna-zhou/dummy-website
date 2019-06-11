const http = require('http');
const fs = require('fs');
const url = require('url');
var appRoot = process.cwd();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  var request = url.parse(req.url, true);
  var action = request.pathname;
  console.log("action is " + action);

  // if (action == '/cat.jpg') {
  //   const cookieKeyAndVal = hostname+'-fetchcookie='+hostname+'-fetchvalue';
  //   res.setHeader('Set-Cookie', cookieKeyAndVal+ 'Path=/cat.jpg; HttpOnly');
  //   var img = fs.readFileSync(appRoot + '/cat.jpg');
  //   res.writeHead(200, {'Content-Type': 'image/gif' });
  //   res.end(img, 'binary');
  // }
  // else {
    res.statusCode = 200;
    res.sendFile(appRoot + '/index.html');

  // }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});