const path = require('path')
const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')


const app = express()


//DB Config
const db = require('../config/keys').MongoURI

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true ,  useUnifiedTopology: true})
    .then(() => console.log('MongoDb Connected....'))
    .catch(err => console.log(err));


app.use(cors());


//Views path
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')        //when changing the views name
//const partialsPath = path.join(__dirname, '../templates/partials')

//EJS
app.use(expressLayouts)
app.set('views', viewsPath)
app.set('view engine', 'ejs')
//app.set('view engine','hbs')
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 



//Bodyparser
app.use(express.urlencoded({ extended: false}))


//connect flash
app.use(flash());





//Routes
app.use('/', require('./routers/index'))


const port = process.env.PORT || 5000







app.use(express.static(publicDirectory))
app.use(express.json())




app.listen(port, () => {
    console.log('Server is up for port ' + port)
})