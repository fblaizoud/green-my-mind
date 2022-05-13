import React from "react";
import { useParams } from "react-router-dom";
import NavBarWithLink from "./NavBarWithLink";

const GreenfoCategory = () => {
  const { title } = useParams();
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);

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
              10yr+ old vehicles represent 80% of the world&apos;s car pollution
            </div>
            <div className="graph4"> 1% </div>
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
            <div className="graph1">80%</div>
            <div className="text2">
              Meat consumption will be increased by 75% in 2050
            </div>
            <div className="graph2"> 75% </div>
            <div className="graph3">25% </div>
            <div className="text3">
              Food is responsible for 25% of the French carbon footprint
            </div>
            <div className="graph4"> 33% </div>
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
            <div className="graph1">10%</div>
            <div className="text2">
              A bath uses 150 litres of water, vs 30-80 litres for a shower
            </div>
            <div className="graph2"> 150 litres </div>
            <div className="graph3">80% </div>
            <div className="text3">
              LED lights use up to 80% less electricity thank regular lights
              bulbs
            </div>
            <div className="graph4"> 1-2 litres </div>
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
            <div className="graph1">7500</div>
            <div className="text2">
              Each kilo of upcycled clothing saves 16600 litres of water.
            </div>
            <div className="graph2"> 16600 </div>
            <div className="graph3">70% </div>
            <div className="text3">70% of our wardrobe is never worn.</div>
            <div className="graph4"> 1 second </div>
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
