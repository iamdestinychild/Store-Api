const errorHandler = async (err, req, res, next) => {
    return res.status(500).json({ msg : "oops something went wrong pls try again"})
}

module.exports = errorHandler