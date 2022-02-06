import express  from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import urlRoutes from './routes/urlRoutes.js'
import bodyParser from 'body-parser'

dotenv.config() 


const app = express()

connectDB() 

app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',urlRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}` )
    )
