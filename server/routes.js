const express = require('express')

const db = require('./db')


const router = express.Router()

router.use(express.json())

router.get('/question', (req, res) => {
  console.log('routes')
  db.getQuestions().then((result) => {
    console.log(result)
    res.json(result)
  })
})

module.exports = router

