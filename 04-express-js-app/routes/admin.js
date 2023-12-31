const express = require('express');

const router = express.Router();

//admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In /add-product middleware');
    res.send('<html><body><form action="/admin/product" method="POST"><input type="text" name="product"></input><button type="submit">Add Product</button></form></body></html>');
});

//admin/add-product => POST
router.post('/product', (req, res, next) => {
    console.log('In /product middleware');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;