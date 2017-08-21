const uniqid = require('uniqid')
const db = require('../db')
const cloudinary = require('cloudinary')
const config = require('../config').cloudinary

cloudinary.config(config);

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
    },
    add (req, res) {
        const item = req.body
        item.uid = uniqid()

        cloudinary.v2.uploader
            .upload(
                item.photo,
                result => {
                    item.url = result.url
                    db.none('INSERT INTO photos (url, title, uid) VALUES (${url}, ${title}, ${uid})', item)
                    .then(function () {
                        res.json({ status: 'success' });
                    })
                    .catch(function (err) {
                        return next(err);
                    });
                }
            )
    }
}