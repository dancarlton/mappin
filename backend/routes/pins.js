const router = require('express').Router()
const Pin = require('../models/Pin')


// create a pin

router.post('/', (req, res) => {
    const newPin = new Pin(req.body)
    try {
        const savedPin = newPin.save()
        res.status(200).json(savedPin)
    } catch (error) {
        res.status(500).json(err)
    }
})

// get all pins
