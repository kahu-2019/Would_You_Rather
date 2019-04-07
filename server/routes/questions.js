const express = require('express')
const router = express.Router()
const db = require('../db/questions')

// GET /api/v1/

router.get('/', (req,res) => {
    db.getQuestions()
    .then(questions => {
        res.json(questions)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

module.exports = router