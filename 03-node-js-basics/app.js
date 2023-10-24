const http = require('http');
const routes = require('./routes');

//Normal function
// function requestListener(req, res){
//     console.log(req);
// }
// const server = http.createServer(requestListener);
// server.listen(3000);

//Anonymous function
// const server = http.createServer(function (req, res){console.log(req)});
// server.listen(3000);

//Arrow function;
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(8080);
