var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url == '/') {
        // show the index page
        fs.readFile('./index.html', (err, data) => {
            res.end(data);
        });
    } else {
        res.end('Welcome to Node Http World!');
    }
    // res.sendFile(__dirname + '/index.html');
});

// var ws = require('socket.io');
// var io= ws(server);
var io = require('socket.io')(server);

io.on('connection', () => {
    console.log('some client connected');
});

server.listen(3000, '127.0.0.1');