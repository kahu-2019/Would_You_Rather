import request from 'superagent'


export function getQuestions(){
    return request.get('/api/v1/')
    .then(res => res.body)
}
