const express = require('express')
const notFound = require('./middleware/404notfound')
const errorHandler = require('./middleware/error-handler')
const connectDB = require('./database/connect')
const productRoute = require('./routes/products')
require('dotenv').config()
require('express-async-errors')

const app = express()

// middlewares

app.use(express.json())

// routes

app.use('/api/v1/products', productRoute)


app.use(errorHandler)
app.use(notFound)


const port = process.env.PORT || 4444

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listeaning on port ${port}`))
    }
    catch (err){
        console.log(err)
    }
}


start()