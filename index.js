const http = require('http');
const static = require('node-static');

const staticDir = new(static.Server)(`${__dirname}`, { cache : false });


const requestListener = function(req, res){
  // Serving static directory to test page
  // navigator object is not part of javascript
  // it is part of Web API from browser
  // So to test its functionality, we create
  // some html pages and serve them static
  // To info https://nodejs.org/en/knowledge/HTTP/servers/how-to-serve-static-files/
  staticDir.serve(req, res);
}

const server = http.createServer(requestListener);
server.listen(8080);