const httpServer = require('http');

const server = httpServer.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/'){
        //console.log("/ path");
        res.write('<html><head>Default Page</head><body><h1>Welcome to Users default path!</h1></body></html>')
        return res.end();
    }

    if (url === '/users'){
        //console.log("/ path");
        res.write('<html><head>Users Page</head><body><h1>Welcome to Users path!</h1><form action="/create-user" method="POST"><input type="text" name="username"></input><button type="submit">Submit</button></form></body></html>')
        return res.end();
    }

    if (url === '/create-user'){
        console.log('create=user path invoked!');
        //res.write()
        const body = [];
        req.on('data', (chunk) => 
        {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);    
        });        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});
