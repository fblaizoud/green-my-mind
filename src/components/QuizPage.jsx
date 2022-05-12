import React, { useState } from "react";
import NavBarWithLink from "./NavBarWithLink";
import quiz from "../../data/quiz.js";
import QuizItem from "./QuizItem";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <NavBarWithLink />
      <div className="quizPage">
        <div className={`quizPage__intro ${currentQuestion !== 0 && "hidden"}`}>
          <p>Are you ready to assess your ecological footprint ?</p>
          <button
            type="button"
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
            }}
          >
            Start Quiz
          </button>
        </div>
        <div className="quizPage__questions">
          {quiz &&
            quiz
              .filter((quizItem) => quizItem.id === currentQuestion)
              .map((quizItem) => (
                <QuizItem
                  {...quizItem}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                />
              ))}
          {currentQuestion === 17 && (
            <div className="quizPage__result">Voilà c&apos;est fini !</div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizPage;
