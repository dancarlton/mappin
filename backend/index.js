const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const app = express()
const pinRoute = require('./routes/pins')

dotenv.config()

const PORT = 8800

const uri = process.env.MONGO_URL

const client = new MongoClient(uri)

async function connectToMongoDB() {
  try {
    await client.connect()
    console.log('MongoDB Connected!')
    // Start the server after successful connection to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
    process.exit(1) // Exit the process with a failure code
  }
  app.use('/api/pins', pinRoute)
}

// Use express.json() middleware before defining routes
app.use(express.json())

// Connect to MongoDB
connectToMongoDB()
