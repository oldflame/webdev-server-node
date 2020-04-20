const questionsModel = require("../models/questions/questions.models.server");
const quizzesModel = require("../models/quizzes/quizzes.models.server");
const mongoose = require('mongoose');
const findAllQuestions = () => questionsModel.find();
const findQuestionById = (qid) => questionsModel.findById(qid);
const findQuestionsForQuiz = (qzid) =>
  questionsModel
    .find({quizId: mongoose.Types.ObjectId(qzid)})
    .then((questions) => {
      console.log("From db", questions);
      return questions
    });
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };
