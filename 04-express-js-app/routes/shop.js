const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In / middleware');
    res.send('<h1>Welcome to Sekhars Website</h1>');
});

module.exports = router;