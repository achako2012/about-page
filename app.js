import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import middlewares from './middlewares.js'
import workRoutes from './routes/work.js'
import aboutRoutes from './routes/about.js'

const app = express()
const PORT = process.env.PORT || '5000'

const uri = process.env.MONGODB_URI || 'mongodb+srv://alex:chako2012@cluster0.t6ctu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use(middlewares.requestTime)
app.use(middlewares.logger)
app.use('/about-page-service', workRoutes)
app.use('/about-page-service', aboutRoutes)

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))



