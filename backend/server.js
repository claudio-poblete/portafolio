const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()
const app = express()

const contactRoutes = require('./routes/contact')
app.use('api/contact', contactRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})