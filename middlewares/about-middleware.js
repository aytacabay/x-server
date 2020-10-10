module.exports = async (req, res, next) => {
    await req.app.locals.db.collection('jobs').find().limit(3).sort({ "_id": 1 }).toArray((err, result) => {
        req.params.data = result
        next()
    }
    )
}