import GreenfoPageButton from "./GreenfoPageButton";
import NavBarWithLink from "./NavBarWithLink";

const GreenfoPage = () => {
  return (
    <>
      <NavBarWithLink />
      <div className="greenfoPage">
        <div className="greenfoPage__grid">
          <GreenfoPageButton title="food" image="./assets/imgFood.jpg" />
          <GreenfoPageButton
            title="transport"
            image="./assets/imgTransport.jpg"
          />
          <GreenfoPageButton title="housing" image="./assets/imgHouse.jpg" />
          <GreenfoPageButton title="clothing" image="./assets/imgTextil.jpg" />
        </div>
      </div>
    </>
  );
};

export default GreenfoPage;
