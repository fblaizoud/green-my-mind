import React from "react";
import { useParams } from "react-router-dom";
import NavBarWithLink from "./NavBarWithLink";
import Number from "./Number";

const GreenfoCategory = () => {
  const { title } = useParams();
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <NavBarWithLink title={title} />
      <div className={`greenfo_${title}`} id="greenfocat">
        <h1>{titleCapitalized}</h1>

        {title === "transport" && (
          <div className="container">
            <div className="text1">
              A plane produces 300 times more carbon dioxyde than a train
            </div>
            <div className="graph1">
              <Number nbr="300" id="1" />
            </div>
            <div className="text2">
              97% of transports depend on fossil energy
            </div>
            <div className="graph2">
              <Number nbr="97" id="2" />%
            </div>
            <div className="graph3">
              <Number nbr="80" id="3" />%
            </div>
            <div className="text3">
              10yr+ old vehicles represent 80% of the world&apos;s car pollution
            </div>
            <div className="graph4">
              <Number nbr="1" id="4" />%
            </div>
            <div className="text4">
              Only 1% of vehicles in France are electric
            </div>
          </div>
        )}
        {title === "food" && (
          <div className="container">
            <div className="text1">
              80% of the world&apos;s deforestation is caused by agriculture
            </div>
            <div className="graph1">
              <Number nbr="80" id="1" /> <span>%</span>
            </div>
            <div className="text2">
              Meat consumption will be increased by 75% in 2050
            </div>
            <div className="graph2">
              {" "}
              <Number nbr="75" id="2" /> <span>%</span>
            </div>
            <div className="graph3">
              <Number nbr="25" id="3" /> <span>%</span>
            </div>
            <div className="text3">
              Food is responsible for 25% of the French carbon footprint
            </div>
            <div className="graph4">
              <Number nbr="33" id="4" /> <span>%</span>
            </div>
            <div className="text4">
              33% of the world&apos;s surface is used for agriculture
            </div>
          </div>
        )}
        {title === "housing" && (
          <div className="container">
            <div className="text1">
              An appliance left on standby is 10% of your electric bill
            </div>
            <div className="graph1">
              <Number nbr="10" id="1" /> %
            </div>
            <div className="text2">
              A bath uses 150 litres of water, vs 30-80 litres for a shower
            </div>
            <div className="graph2">
              <Number nbr="150" id="2" />L
            </div>
            <div className="graph3">
              <Number nbr="80" id="3" /> %
            </div>
            <div className="text3">
              LED lights use up to 80% less electricity thank regular lights
              bulbs
            </div>
            <div className="graph4">1-2 L</div>
            <div className="text4">
              Leaving the tap open while brushing your teeth is a 1-2 litres
              water waste
            </div>
          </div>
        )}
        {title === "clothing" && (
          <div className="container">
            <div className="text1">
              The making of a pair of jeans takes 7500 litres of water (i.e. a
              human being&apos;s water consumption for 13 years).
            </div>
            <div className="graph1">
              <Number nbr="7500" id="1" />L
            </div>
            <div className="text2">
              Each kilo of upcycled clothing saves 16600 litres of water.
            </div>
            <div className="graph2">
              <Number nbr="16600" id="2" />L
            </div>
            <div className="graph3">
              <Number nbr="70" id="3" /> %
            </div>
            <div className="text3">70% of our wardrobe is never worn.</div>
            <div className="graph4">
              <Number nbr="1" id="4" /> <span>second</span>
            </div>
            <div className="text4">
              A full bin of clothing is thrown out every second in the World.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GreenfoCategory;
