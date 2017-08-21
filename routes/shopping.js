const uniqid = require('uniqid')
const db = require('../db')

module.exports = {
    get (req, res, next) {
        db.any('select * from shopping')
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
    add (req, res, next) {
        const item = req.body
        item.uid = uniqid()

        db.none('INSERT INTO shopping (item, done, uid) VALUES (${item}, ${done}, ${uid})', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    },
    update(req, res, next) {
        const item = req.body
        
        db.none('UPDATE shopping SET item=${item}, done=${done} WHERE uid=${uid}', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    },
    remove(req, res, next) {
        const item = req.body
        
        db.none('DELETE FROM shopping WHERE uid=${uid}', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    }
}
