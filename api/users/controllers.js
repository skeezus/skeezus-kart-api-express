const express = require('express');
const router = express.Router();
const { NotFoundError, UniqueViolationError } = require('objection');

const User = require('./models')

router.get('/', function(req, res) {
    //res.send('GET handler for /users route.');
    User.query()
        .then(users => {
            res.json(users)
        })
});

router.post('/', async function(req, res) {
    try {
        //console.log(Object.keys(req))
        const user = await User.query().insert(req.body)
        res.json(user)
    } catch (err) {
        if(err instanceof NotFoundError) {
            return res.status(404).json({
                error: 'Not Found Error',
                message: `industry not found`,
            });
        } else if(err instanceof UniqueViolationError) {
            return res.status(422).json({
                error: 'Unique Violation Error',
                message: `email exists`,
            });
        } else {
            return res.status(500).json({
                    error: 'Server Error',
                    message: `something went wrong`,
                });;
        }
    }
});

module.exports = router; // https://www.sitepoint.com/understanding-module-exports-exports-node-js/