const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const app = express()

dotenv.config()

const PORT = 8800

const uri = process.env.MONGO_URL

const client = new MongoClient(uri)

async function connectToMongoDB() {
  try {
    await client.connect()
    console.log('MongoDB Connected!')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


app.use(express.json())
