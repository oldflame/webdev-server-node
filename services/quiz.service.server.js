const quizzesDao = require("../daos/quizzes.dao.server");
const findAllQuizzes = () => { 
    console.log("In service")
    return quizzesDao.findAllQuizzes();
}
const findQuizById = (qid) => quizzesDao.findQuizById(qid);
module.exports = { findAllQuizzes, findQuizById };
