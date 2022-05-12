import React from "react";
import Proptypes from "prop-types";

const GreenfoPageButton = ({ title, image }) => {
  return (
    <div className="greenfoButton">
      {/* <button type="button">Food</button> */}
      <h2 className="greenfoButton__title">{title}</h2>
      <img className="greenfoButton__img" src={image} alt="image_food" />
    </div>
  );
};

GreenfoPageButton.propTypes = {
  title: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};
export default GreenfoPageButton;
