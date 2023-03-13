const notFound = (req, res) => {
    res.status(404).json({ "msg": "ooops Nothing here"})
}

module.exports = notFound