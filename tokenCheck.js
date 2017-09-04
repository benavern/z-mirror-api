module.exports = function(req, res, next) {
    const securised = req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE'
    const token = process.env.z_mirror_token || null
    const received = req.headers.z_mirror_token || null

    if (!securised || token && received && token === received) {
        next()
    } else {
        res.status(401).json({
            status: 'error',
            message: 'You are not allowed to modify data here!',
            headers: req.headers
        })
    }
}