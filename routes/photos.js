const uniqid = require('uniqid')
const db = require('../db')
const cloudinary = require('cloudinary')

module.exports = {
    get (req, res, next) {
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
    add (req, res, next) {
        const item = req.body
        item.uid = uniqid()

        cloudinary.v2.uploader
            .upload(
                item.photo,
                (error, result) => {

                    if (error) return next(error)

                    item.url = result.url
                    item.public_id = result.public_id
                    db.none('INSERT INTO photos (url, title, public_id, uid) VALUES (${url}, ${title}, ${public_id}, ${uid})', item)
                    .then(function () {
                        res.json({ status: 'success' });
                    })
                    .catch(function (err) {
                        return next(err);
                    });
                }
            )
    },
    update(req, res, next) {
        const item = req.body
        
        db.none('UPDATE photos SET title=${title} WHERE uid=${uid}', item)
        .then(function () {
            res.json({ status: 'success' });
        })
        .catch(function (err) {
            return next(err);
        });
    },
    remove (req, res, next) {
        const item = req.body

        cloudinary.v2.uploader
            .destroy(
                item.public_id,
                (error, result) => {

                    if (error) return next(error)
                    db.none('DELETE FROM photos WHERE uid=${uid}', item)
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