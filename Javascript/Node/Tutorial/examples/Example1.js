const fs = require('fs'),
http = require('http'),
url  = require('url');

http.createServer((req, res) => {
    res.end('Hello World!\n');
}).listen(3000);