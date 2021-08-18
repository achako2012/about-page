import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import middlewares from './middlewares.js'
import workRoutes from './routes/work.js'
import aboutRoutes from './routes/about.js'

const server = express()
const PORT = process.env.PORT || '5000'

const uri = process.env.MONGODB_URI || 'mongodb+srv://alex:chako2012@cluster0.t6ctu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Data parsing
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'))
}

server.use(middlewares.requestTime)
server.use(middlewares.logger)
server.use('/about-page-service', workRoutes)
server.use('/about-page-service', aboutRoutes)

server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))



