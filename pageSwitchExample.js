var http = require('http');
var url =  require ('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var page = q.pathname;
    if (page == '/') {
        fs.readFile('homePage.html', function(err, data) {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    if (page == '/otherPage') {
        fs.readFile('otherPage.html', function(err, data) {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);
