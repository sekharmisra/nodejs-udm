
const express  = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log("Default Middleware which gets executed automatically everytime page loads!");
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In product middleware');
    res.send('<h1>Welcome to Sekhars Product Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In middleware');
    res.send('<h1>Welcome to Sekhars Website</h1>');
});

app.listen(8080);
