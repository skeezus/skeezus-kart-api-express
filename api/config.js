const dotenv = require('dotenv'); // https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
dotenv.config();

module.exports = {
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS
}
