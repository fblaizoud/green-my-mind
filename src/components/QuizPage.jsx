import React from "react";
import NavBarWithLink from "./NavBarWithLink";

const QuizPage = () => {
  return (
    <>
      <NavBarWithLink />
      <div className="quizPage">
        <div className="quizPage__intro">
          <p>Are you ready to assess your ecological footprint ?</p>
          <button type="button">Start Quiz</button>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
