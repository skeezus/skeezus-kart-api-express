const express = require('express');
const router = express.Router();

const User = require('./models')

router.get('/', function(req, res) {
    //res.send('GET handler for /users route.');
    User.query()
        .then(users => {
            res.json(users)
        })
});

module.exports = router; // https://www.sitepoint.com/understanding-module-exports-exports-node-js/