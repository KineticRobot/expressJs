const express = require('express');
const app = express();
var http = require('http');
var url =  require ('url');
var fs = require('fs');
const port = 8080;

app.get("/", function (req, res) {
    fs.readFile('homePage.html', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });;
});

app.get("/otherPage", function (req, res) {
    fs.readFile('otherPage.html', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });;
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
