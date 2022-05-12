import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <video className="home__video" autoPlay loop muted playsInline>
        <source src="./assets/home_video.mp4" type="video/mp4" />
      </video>
      <img
        className="home__title"
        src="./assets/logo_green-my-mind.svg"
        alt="logo"
      />
      <p className="home__description">
        Welcome to Green My Mind, a resource to help you improve your ecological
        footprint. How green are you? Quiz yourself and test your daily habits.
        Our website also offers facts and resources to make your everyday life a
        little greener.{" "}
      </p>
      <Link to="/choice">
      <div className="home__button" type="button">
        Go <span>GREEN</span> !
      </div>
      </Link>
    </div>
  );
};

export default Home;
