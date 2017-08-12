const data = {
    list: [
        {
            item: 'carottes',
            done: false,
            uid: 'shopping1'
        },
        {
            item: 'patates',
            done: true,
            uid: 'shopping2'
        }
    ]
}

const uniqid = require('uniqid')
const db = require('../db')

module.exports = {
    get (req, res) {
        db.any('select * from shopping')
        .then(function (data) {
            res.json({ 
                list: data,
                status: 'success'
            });
        })
        .catch(function (error) {
          res.status(500).send({ error })
        });
    },
    add (req, res) {
        const item = req.body
        item.uid = uniqid()

        db.none('INSERT INTO shopping (item, done, uid) VALUES (${item}, ${done}, ${uid})', item)
        .then(function (data) {
            res.json({ status: 'success' });
        })
        .catch(function (error) {
          res.status(500).send({ error })
        });
    },
    update(req, res) {
        const item = req.body
        
        db.none('UPDATE shopping SET item=${item}, done=${done} WHERE uid=${uid}', item)
        .then(function (data) {
            res.json({ status: 'success' });
        })
        .catch(function (error) {
          res.status(500).send({ error })
        });
    },
    remove(req, res) {
        const uid = req.body.uid
        data.list = data.list.filter(item => item.uid !== uid)
        notImplemented('remove')
        res.json(data)
    }
}

function notImplemented (txt) {
    console.log(`[Shopping] ${txt}`)
}