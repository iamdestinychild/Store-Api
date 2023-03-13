require('dotenv').config()

const productModel = require('./model/produts')
const productDB = require('./database/connect')
const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await productDB(process.env.MONGO_URI)
        await productModel.deleteMany()
        await productModel.create(jsonProducts)
        console.log('success!!!')
        process.exit(0)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()