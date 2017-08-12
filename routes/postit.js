const uniqid = require('uniqid')
const db = require('../db')

module.exports = {
    get (req, res) {
        db.any('select * from postit')
        .then(function (data) {
            res.json({ 
                data,
                status: 'success'
            });
        })
        .catch(function (err) {
            return next(err);
        });
    },
    add (req, res) {
        const item = req.body
        item.uid = uniqid()

        db.none('INSERT INTO postit (content, uid) VALUES (${content}, ${uid})', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    },
    update(req, res) {
        const item = req.body
        
        db.none('UPDATE postit SET content=${content} WHERE uid=${uid}', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    },
    remove(req, res) {
        const item = req.body
        
        db.none('DELETE FROM postit WHERE uid=${uid}', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    }
}
