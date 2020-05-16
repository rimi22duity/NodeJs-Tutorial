const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World !');
        res.end();
    }

    if(req.url === '/api') {
        res.write(JSON.stringify(['Rimi Reza', 'Sansa Doyle']));
        res.end();
    }
});

server.listen(3000);

console.log('Listening to the port 3000....');