var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myFile = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    myFile = myFile.replace('{Message}', 'Hello Full');
    res.end(myFile);
    
}).listen(1337, '127.0.0.1');