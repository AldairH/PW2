var http = require('http');

http.createServer(function(res,req){
    res.writeHead(200,{'Content-Type':'text'});
    res.end('Hello World!');
}).listen(8080);