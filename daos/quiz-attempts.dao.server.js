const quizAttemptsModel = require("../models/quiz-attempts/quiz-attempts.models.server");

const scoreQuiz = (questions) => {
  console.log("Questions", questions);
  let numberOfCorrectQuestions = 0;
  questions.forEach((question) =>
    question.selectedAnswer.toLowerCase() === question.correct.toLowerCase()
      ? numberOfCorrectQuestions++
      : numberOfCorrectQuestions
  );
  return (100 * numberOfCorrectQuestions) / questions.length;
};

const findAttemptsForQuiz = (qzid) =>
  quizAttemptsModel.find({ quiz: qzid }).populate("quiz", "title _id");
const createAttempt = (qid, attempt) =>
  quizAttemptsModel.create({
    quiz: qid,
    answers: attempt,
    score: scoreQuiz(attempt),
  });

module.exports = { createAttempt, findAttemptsForQuiz };
