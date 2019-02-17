const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/subreddit/:subreddit', (req, res) => {
  request
    .get(`http://www.reddit.com/r/${req.params.subreddit}.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

router.get('/questions', (req, res) => {
  if (!req.app.locals.db) {
    res.status(500).send('no db')
  }
  req.app.locals.db('questions').select()
    .then(results => {
      res.json({questions: results})
    })
    .catch(e => {
      res.status(500).json(e)
    })
})

module.exports = router

