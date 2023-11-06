const http = require('http');
const colors = require('colors');

/*
http.createServer(function (req, res) {
    res.write('<h1>Hello world!</h1>');
    res.end();
}).listen(3000);
*/

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<h1>Hello world!</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.yellow);
});