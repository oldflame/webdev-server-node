const questionsService = require("../services/question.service.server");
module.exports = function (app) {
  app.get("/api/quizzes/:qid/questions", (req, res) => {
   console.log("test", req.params)
    return questionsService
      .findQuestionsForQuiz(req.params["qid"])
      .then((questions) => res.json(questions))
  });
  app.get("/api/questions", (req, res) =>
    questionsService
      .findAllQuestions()
      .then((allQuestions) => res.json(allQuestions))
  );
  app.get("/api/questions/:qid", (req, res) =>
    questionsService
      .findQuestionById(req.params["qid"])
      .then((question) => res.json(question))
  );
};
