
const express  = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req, res, next) => {
    console.log("In default middleware which gets executed automatically everytime page loads!");
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In /add-product middleware');
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="product"></input><button type="submit">Add Product</button></form></body></html>');
});

app.post('/product', (req, res, next) => {
    console.log('In /product middleware');
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In / middleware');
    res.send('<h1>Welcome to Sekhars Website</h1>');
});

app.listen(8080);
