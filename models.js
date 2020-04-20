'use strict';

exports = module.exports = (app, mongoose) => {
  require('./models/questions/questions.schema.server')(app, mongoose);
  require('./models/quiz-attempts/quiz-attempts.schema.server')(app, mongoose);
  require('./models/quizzes/quizzes.schema.server')(app, mongoose);
};