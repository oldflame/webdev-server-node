
const quizAttemptDao = require('../daos/quiz-attempts.dao.server')
module.exports = (app) => {
   app.post('/api/quizzes/:qid/attempts', (req, res) => {
       console.log("Score body", req.body);
           return quizAttemptDao.createAttempt( req.params.qid, req.body.questions)
               .then(attempt => res.send(attempt))
            });
   
   app.get('/api/quizzes/:qid/attempts', (req, res) =>
       quizAttemptDao.findAttemptsForQuiz(req.params.qid)
           .then(attempts => res.send(attempts)))
}
