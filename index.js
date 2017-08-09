const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 5000

// greating (nothing to see here)
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'api de mon <a href="https://github.com/benavern/z-mirror">z-mirror</a>')
})

app.get('/shopping', (req, res) => {
    filePromise('fake_data/shopping.json')
        .then(data => {
            res.json(data)
        })
        .catch(err => { 
            res.json({error: err})
        })
})

app.get('/postit', (req, res) => {
    filePromise('fake_data/postit.json')
        .then(data => {
            res.json(data)
        })
        .catch(err => { 
            res.json({error: err})
        })
})


/**
 * Start the app
 */
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


function filePromise(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) return reject(err)
            return resolve(JSON.parse(data))
        })
    })
}