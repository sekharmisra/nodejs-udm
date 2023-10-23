const fs = require("fs");
const { buffer } = require('stream/consumers');

const requestHandler = (req, res) => {
    const url = req.url;
    const httpmethod = req.method;

    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url === '/message' && httpmethod === 'POST'){
        const body = [];
        req.on('data', (chunk) => 
        {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                if (err === null){
                    res.statusCode = 302; //Redirection
                    res.setHeader('Location', '/');
                    return res.end();
                }
                else{
                    console.log("Error while redirection!");
                }
            });
        });      
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Website!</title></head>');
    res.write('<body><h1>Welcome to Sekhars Website</h1></body>');
    res.write('</html>');
    res.end();
}

//module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: "This is testing test!"
// };

//module.exports.handler = requestHandler;
//module.exports.someText = "This is testing test!";

exports.handler = requestHandler;
exports.someText = "This is testing test!";

