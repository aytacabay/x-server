module.exports = (req, res) => {
    res.json({
        ...req.params.data
    })
}
