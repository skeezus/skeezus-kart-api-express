/* 
 * https://nodejs.org/en/docs/guides/getting-started-guide/
 * https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
 * https://www.coreycleary.me/avoid-manually-prepending-api-to-every-express-route-with-this-simple-method/
 */

const express = require('express')
const routes = require('./routes')

const app = express()
const port = 8080

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app;