const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const Filestore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()
const conn = require('./db/conn')

//Models
const Tought = require('./models/Tought')
const User = require('./models/User')

//Import Routes
const toughtRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

//Import Controllers
const ToughtsController = require('./controllers/ToughtsController')

app.get('/', ToughtsController.showToughts)

// Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Receber resposta do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//session middleware
app.use(
    session({
      name: 'session',
      secret: 'nosso_secret',
      resave: false,
      saveUninitialized: false,
      store: new Filestore({
        logFn: function () {},
        path: require('path').join(require('os').tmpdir(), 'sessions'),
      }),
      cookie: {
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      },
    }),
  )
  
  // flash messages
  app.use(flash());

// public path
app.use(express.static('public'))

// set session to response
app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

// Routes
app.use('/toughts', toughtRoutes)
app.use('/', authRoutes)

conn
    //.sync( {force: true}) // Reinicia a tabela, cria as relações novas implementadas
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor conectado em: http://localhost:3000")
        })
    })
    .catch((err) => {
        console.log(err)
    })



