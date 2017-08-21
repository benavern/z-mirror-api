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
        console.log(req.body.photo)
        res.end(req.body.photo)
    }
}