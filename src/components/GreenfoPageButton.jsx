import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const GreenfoPageButton = ({ title, image }) => {
  return (
    <Link to={`/greenfo/${title}`}>
      <div className="greenfoPreButton">
        <div className="greenfoButton">
          <h2 className="greenfoButton__title">{title}</h2>
          <img className="greenfoButton__img" src={image} alt="image_food" />
        </div>
      </div>
    </Link>
  );
};

GreenfoPageButton.propTypes = {
  title: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};
export default GreenfoPageButton;
