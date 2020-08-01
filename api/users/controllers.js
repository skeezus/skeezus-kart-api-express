const express = require('express');
const router = express.Router();
const { NotFoundError, UniqueViolationError, ValidationError } = require('objection');

const User = require('./models')

router.get('/', function(req, res) {
    //res.send('GET handler for /users route.');
    User.query()
        .then(users => { // promise syntax
            res.json(users)
        })
});

router.post('/', async function(req, res) {
    try {
        //console.log(Object.keys(req))
        const user = await User.query().insert(req.body)
        res.json(user)
    } catch(err) {
        console.log(err)
        if (err instanceof ValidationError) {
            for (const property in err.data) {
                  console.log(`${property}: ${err.data[property]}`);
            }
            //console.log(err.data)
            return res.status(400).json({
                error: 'Bad Request',
                message: err.data,
            });;
        } else if(err instanceof NotFoundError) {
            return res.status(404).json({
                error: 'Not Found',
                message: `We were unable to find the resource you requested.`,
            });
        } else if(err instanceof UniqueViolationError) {
            return res.status(422).json({
                error: 'Email Exists',
                message: 'A user with this email already exists.',
            });
        } else {
            return res.status(500).json({
                error: 'Server Error',
                message: `There was an error with the server. Please try again or contact support.`,
            });;
        }
    }
});

module.exports = router; // https://www.sitepoint.com/understanding-module-exports-exports-node-js/
