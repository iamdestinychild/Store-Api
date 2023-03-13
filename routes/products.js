const express = require('express')

const router = express.Router()

const { getProductsStatic, getProducts } = require('../controller/products')

router.route('/').get(getProducts)
router.route('/static').get(getProductsStatic)

module.exports = router