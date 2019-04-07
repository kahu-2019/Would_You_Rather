const connection = require('./connection')

module.exports = {
    getQuestions
}

function getQuestions(testDb, questionId){
    const db = testDb || connection
    return db('questions')
}
