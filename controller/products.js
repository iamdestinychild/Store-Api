const product = require('../model/produts')

const getProducts = async (req, res) => {
    const { featured, company, name, sort, select } = req.query
    const queryObject = {}
    
    if (featured) {
        queryObject.featured = featured
    }

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }

    let result =  product.find(queryObject)

    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createdAt')
    }

    if (select) {
        const selectList = select.split(',').join(' ')
        result = result.select(selectList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    
    const data = await result.skip(skip).limit(limit)

    res.status(200).json({ data, nbHits: data.length })
}

module.exports = {
    getProducts
}