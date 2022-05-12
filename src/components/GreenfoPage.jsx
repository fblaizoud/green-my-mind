import GreenfoPageButton from "./GreenfoPageButton";
import NavBarWithLink from "./NavBarWithLink";

const GreenfoPage = () => {
  return (
    <>
      <NavBarWithLink />
      <div className="greenfoPage">
        <div className="greenfoPage__grid">
          <GreenfoPageButton title="Food" image="./assets/imgFood.jpg" />
          <GreenfoPageButton
            title="Transport"
            image="./assets/imgTransport.jpg"
          />
          <GreenfoPageButton title="Houses" image="./assets/imgHouse.jpg" />
          <GreenfoPageButton title="Clothing" image="./assets/imgTextil.jpg" />
        </div>
      </div>
    </>
  );
};

export default GreenfoPage;
