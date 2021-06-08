import express from 'express'
import morgan from 'morgan'
import { Db, MongoClient } from 'mongodb'
import assert from 'assert/strict'
import DefaultRouter from './http/routes/index'
import UsersRouter from './http/routes/users'

// TODO: Use this in other places
let db: Db

// Mongo Native Driver Setup
const mongoUrl = process.env.MONGO_URL ?? 'mongodb://localhost:27017'
const dbName = 'myproject'

const client = new MongoClient(mongoUrl)
client.connect(function (err) {
  assert.equal(null, err) // if not, program is terminated
  client.db(dbName)

  client.close()
})

const connectMongo = async () => {
  try {
    await client.connect()
    await client.db(dbName).command({ ping: 1 })
    console.log('Connected successfully to server')
  } catch (err) {
    await client.close()
  }
}
connectMongo().catch(console.dir)

const port = process.env.PORT ?? 3000

const app = express()
app.use(morgan('common'))
app.use(express.json())

app.use('/', DefaultRouter)
app.use('/users', UsersRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
