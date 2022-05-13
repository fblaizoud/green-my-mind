import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarWithLink from "./NavBarWithLink";
import quiz from "../../data/quiz.js";
import QuizItem from "./QuizItem";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [transportScore, setTransportScore] = useState(0);
  const [foodScore, setFoodScore] = useState(0);
  const [housingScore, setHousingScore] = useState(0);
  const [clothingScore, setClothingScore] = useState(0);
  const [advice, setAdvice] = useState("");

  const reset = () => {
    setTransportScore(0);
    setFoodScore(0);
    setHousingScore(0);
    setClothingScore(0);
    setCurrentQuestion(0);
  };

  useEffect(() => {
    if ((transportScore + foodScore + housingScore + clothingScore) / 4 >= 75) {
      setAdvice("Congratulations! You're a Green Expert! 🥳");
    } else if (
      (transportScore + foodScore + housingScore + clothingScore) / 4 >=
      50
    ) {
      setAdvice("Not bad! But you can do better, we know it! 🙃");
    } else {
      setAdvice(
        "You are soooo not Green! Go get some colors on the Greenfo Page! 😵"
      );
    }
  }, [transportScore, foodScore, housingScore, clothingScore]);

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
                  key={quizItem.id}
                  {...quizItem}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  setTransportScore={setTransportScore}
                  setFoodScore={setFoodScore}
                  setHousingScore={setHousingScore}
                  setClothingScore={setClothingScore}
                  transportScore={transportScore}
                  foodScore={foodScore}
                  housingScore={housingScore}
                  clothingScore={clothingScore}
                />
              ))}
          {currentQuestion === 17 && (
            <div className="quizPage__result">
              <p className="quizPage__result__total">
                Your Green Score is :{" "}
                {(transportScore + foodScore + housingScore + clothingScore) /
                  4}{" "}
                %
              </p>
              <div className="quizPage__result__details">
                <div className="quizPage__result__details__categories">
                  <p className="quizPage__result__details__categories__transport">
                    Transport Score : {transportScore} %
                  </p>
                  <p className="quizPage__result__details__categories__food">
                    Food Score : {foodScore} %
                  </p>
                  <p className="quizPage__result__details__categories__housing">
                    Housing Score : {housingScore} %
                  </p>
                  <p className="quizPage__result__details__categories__clothing">
                    Clothing Score : {clothingScore} %
                  </p>
                </div>
                <div className="quizPage__result__details__advice">
                  <p>{advice}</p>
                  {advice === "Congratulations! You're a Green Expert! 🥳" && (
                    <div>
                      You can still donate some €€€{" "}
                      <a href="https://faireundon.wwf.fr/don/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNed87qdfDPF%2B3XnHxbBuio6P%2B87BK5UgPBjhANsxPKWzasnF4R4IjJH7ALzd%2B1l4O%2FIsm%2F0n9JQgx%2BkBekp9Hmn1GDBsuGXs5WTF4s3T4oD9szUsypdqY83tgoViVQIJQ%3D&utm_source=SiteWWF&utm_medium=Homepage&utm_content=CTAHeader&_ga=2.126929545.506041628.1652361385-839367546.1652361385&_gac=1.149806276.1652367043.Cj0KCQjw4PKTBhD8ARIsAHChzRI5npiphgWhvcGkDOJRtqtoZVq-Hh2q5853Qt52ORWBhXzHsi11y7UaAnOPEALw_wcB&_cv=1">
                        here.
                      </a>
                    </div>
                  )}
                  {advice ===
                    "Not bad! But you can do better, we know it! 🙃" && (
                    <div>
                      Check out this{" "}
                      <a href="https://www.greenqueen.com.hk/">fine</a> resource
                      for some cool eco-tips.
                    </div>
                  )}
                  {advice ===
                    "You are soooo not Green! Go get some colors on the Greenfo Page! 😵" && (
                    <div>
                      <a href="https://www.greenpeace.org/global/">Find out</a>{" "}
                      how you can change your nasty habits.
                    </div>
                  )}
                  <div className="quizPage__result__details__advice__buttons">
                    <Link to="/greenfo">
                      <button type="button">Get Green !</button>
                    </Link>
                    <Link to="/quiz">
                      <button type="button" onClick={reset}>
                        Reset Quiz
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizPage;
