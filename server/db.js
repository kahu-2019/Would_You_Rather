const config = require('../../knexfile').development
const db = require('knex')(config)
const getQuestion= (db)=>{
return db("questions").
}
module.exports = {
  getQuestion
}