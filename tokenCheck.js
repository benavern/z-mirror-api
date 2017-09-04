module.exports = function(req, res, next) {
    const secured = req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE'
    const token = process.env.Z_MIRROR_TOKEN || null
    const received = req.headers['x-z_mirror_token'] || null

    if (!secured || token && received && token === received) {
        next()
    } else {
        res.status(401).json({
            status: 'error',
            message: 'You are not allowed to modify data here!'
        })
    }
}