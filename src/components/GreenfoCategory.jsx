import React from "react";
import { useParams } from "react-router-dom";
import NavBarWithLink from "./NavBarWithLink";

const GreenfoCategory = () => {
  const { title } = useParams();
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <>
      <NavBarWithLink />
      <div className={`greenfo_${title}`} id="greenfocat">
        <h1>{titleCapitalized}</h1>

        {title === "transport" && (
          <div className="container">
            <div className="text1">
              A plane produces 300 times more carbon dioxyde than a train
            </div>
            <div className="graph1">300</div>
            <div className="text2">
              97% of transports depend on fossil energy
            </div>
            <div className="graph2"> 97% </div>
            <div className="graph3">80% </div>
            <div className="text3">
              10yr+ old vehicles represent 80% of the worlds car pollution
            </div>
            <div className="graph4"> 1% </div>
            <div className="text4">
              Only 1% of vehicles in France are electric
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GreenfoCategory;
