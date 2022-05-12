import React from "react";
import PropTypes from "prop-types";

const QuizItem = ({
  id,
  category,
  question,
  answers,
  currentQuestion,
  setCurrentQuestion,
  setTransportScore,
  setFoodScore,
  setHousingScore,
  setClothingScore,
  transportScore,
  foodScore,
  housingScore,
  clothingScore,
}) => {
  const handleAnswer1 = () => {
    if (category === "transport") {
      setTransportScore(transportScore + 25);
    }
    if (category === "food") {
      setFoodScore(foodScore + 25);
    }
    if (category === "housing") {
      setHousingScore(housingScore + 25);
    }
    if (category === "clothing") {
      setClothingScore(clothingScore + 25);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswer2 = () => {
    if (category === "transport") {
      setTransportScore(transportScore + 12.5);
    }
    if (category === "food") {
      setFoodScore(foodScore + 12.5);
    }
    if (category === "housing") {
      setHousingScore(housingScore + 12.5);
    }
    if (category === "clothing") {
      setClothingScore(clothingScore + 12.5);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quizItem">
      <h3 className="quizItem__question">
        {id}/16 - {question}
      </h3>
      <div className="quizItem__answers">
        <button
          className="quizItem__answers__button"
          type="button"
          onClick={handleAnswer1}
        >
          {answers && answers[0].answer}
        </button>
        <button
          className="quizItem__answers__button"
          type="button"
          onClick={handleAnswer2}
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
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  setTransportScore: PropTypes.func.isRequired,
  setFoodScore: PropTypes.func.isRequired,
  setHousingScore: PropTypes.func.isRequired,
  setClothingScore: PropTypes.func.isRequired,
  transportScore: PropTypes.number.isRequired,
  foodScore: PropTypes.number.isRequired,
  housingScore: PropTypes.number.isRequired,
  clothingScore: PropTypes.number.isRequired,
};

export default QuizItem;
