import { Link } from "react-router-dom";
import NavBarWithoutLink from "./NavBarWithoutLink";

const ChoicePage = () => {
  return (
    <>
      <NavBarWithoutLink />
      <div className="choicepage">
        <Link to="/greenfo">
          <div className="choicepage__section">
            <img src="./assets/forest.jpg" alt="forest" />
            <div className="choicepage__section__links">GREENFO</div>
          </div>
        </Link>
        <Link to="/quiz">
          <div className="choicepage__section">
            <img src="./assets/thinking.jpg" alt="thinking" />
            <div className="choicepage__section__links">QUIZ</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ChoicePage;
