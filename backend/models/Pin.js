const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      min: 3
    },
    description: {
      type: String,
      required,
      min: 3,
    },
    rating: {
      type: Number,
      required,
      min: 0,
      max: 5
    },
    lat: {
        type: Number,
        require
    },
    long: {
        type: Number,
        require
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Pin", PinSchema)
