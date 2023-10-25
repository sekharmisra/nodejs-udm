const express = require('express');
const app = express();
console.log('local server!')

// app.use('/', (req, res, next) => {
//     console.log("Middleware 1");
//     next();
// });

app.use('/users', (req, res, next) => {
    console.log("Middleware 2");
    res.send('<h1>Users Login page<h1>')
});

app.use('/', (req, res, next) => {
    console.log("Middleware 3");
    res.send('<h1>Users Default Page<h1>')
});

app.listen(3000);