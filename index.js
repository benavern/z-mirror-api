const express = require('express')
const bodyParser = require('body-parser')
const tokenCheck = require('./tokenCheck')
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json({limit: '2mb'}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Z_MIRROR_TOKEN")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next()
});

app.use(tokenCheck)

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .json({
            status: 'error',
            message: err.message
        })
})

const shopping = require('./routes/shopping.js')
const postit = require('./routes/postit.js')
const photos = require('./routes/photos.js')

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
 * ========================
 * PHOTOS
 * ========================
 */
app.route('/photos')
    .get(photos.get)
    .post(photos.add)
    .put(photos.update)
    .delete(photos.remove)

/**
 * Start the app
 */
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})