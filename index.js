const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = process.env.PORT || 5000

const shopping = require('./routes/shopping.js')
const postit = require('./routes/postit.js')

/**
 * ================================
 * greating (nothing to see here)
 * ================================
 */ 
app.get('/', (req, res) => {
    res.send('Welcome on my <a href="https://github.com/benavern/z-mirror">z-mirror</a> api server')
})

/**
 * ========================
 * SHOPPING
 * ========================
 */
app.route('/shopping')
    .get(shopping.get)
    .post(shopping.add)
    .put(shopping.update)
    .delete(shopping.remove)

/**
 * ========================
 * POSTIT
 * ========================
 */
app.route('/postit')
    .get(postit.get)
    .post(postit.add)
    .put(postit.update)
    .delete(postit.remove)

/**
 * Start the app
 */
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})