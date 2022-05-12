import React from "react";
import PropTypes from "prop-types";

const QuizItem = ({
  question,
  answers,
  currentQuestion,
  setCurrentQuestion,
}) => {
  return (
    <div className="quizItem">
      <h3 className="quizItem__question">{question}</h3>
      <div className="quizItem__answers">
        <button
          className="quizItem__answers__button"
          type="button"
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {answers && answers[0].answer}
        </button>
        <button
          className="quizItem__answers__button"
          type="button"
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {answers && answers[1].answer}
        </button>
        <button
          className="quizItem__answers__button"
          type="button"
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {answers && answers[2].answer}
        </button>
      </div>
    </div>
  );
};

QuizItem.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
};

export default QuizItem;
