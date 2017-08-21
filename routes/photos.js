const uniqid = require('uniqid')
const db = require('../db')

module.exports = {
    get (req, res) {
        db.any('select * from photos')
        .then(function (data) {
            res.json({ 
                data,
                status: 'success'
            });
        })
        .catch(function (err) {
            return next(err);
        });
    }
}