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
          res.json({ list: data });
        })
        .catch(function (error) {
          res.status(500).send({ error })
        });
    },
    add (req, res) {
        const item = req.body
        item.uid = uniqid()
        notImplemented('add')
        res.json(item)
    },
    update(req, res) {
        const newItem = req.body
        data.list = data.list.map(item => {
            if (item.uid === newItem.uid) item = newItem
            return item
        })
        notImplemented('update')
        res.json(newItem)
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