import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import middlewares from './middlewares.js'
import workRoutes from './routes/work.js'
import aboutRoutes from './routes/about.js'


const PORT = process.env.PORT || '8080'
const app = express()
const uri = process.env.MONGODB_URI

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(middlewares.requestTime)
app.use(middlewares.logger)

// app.use('/about-page-service', workRoutes)
// app.use('/about-page-service', aboutRoutes)

async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.use('/about-page-service', workRoutes)
        app.use('/about-page-service', aboutRoutes)

        if(process.env.NODE_ENV === 'production'){
             app.use(express.static('client/build'))
        }

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

