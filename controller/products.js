const product = require('../model/produts')

const getProductsStatic = async (req, res) => {
    throw new Error('somthing went wrong while trying to get products')
    res.status(200).json({msg:'product test'})
}

const getProducts = async (req, res) => {
    const { featured, company, name } = req.query
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
    console.log(queryObject)
    const data = await product.find(queryObject)
    res.status(200).json({ data, nbHits: data.length })
}

module.exports = {
    getProductsStatic,
    getProducts,
}