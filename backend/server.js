const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

const router = require('./routes')
const { connection } = require('./models')

let corsOptions = {
  origin: 'http://localhost',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}

app.set('trust proxy', true)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use(cors(corsOptions))
app.use(express.json())

app.get('/reset', (req, res) => {
  connection
    .sync({
      force: true
    })
    .then(() => {
      res.status(201).send({ message: 'Database reset!' })
    })
    .catch(err => {
      res.status(500).send({ message: 'Database reset failed', err: err.message })
    })
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is online on port ${port}`)
})
