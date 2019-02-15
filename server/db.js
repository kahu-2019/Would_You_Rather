const config = require('../knexfile').development
const db = require('knex')(config)

const getQuestions = () => {
  return db("questions").select()
}
module.exports = {
  getQuestions
}