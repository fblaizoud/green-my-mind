import { Link } from "react-router-dom";
import NavBarWithoutLink from "./NavBarWithoutLink";

const ChoicePage = () => {
  return (
    <>
      <NavBarWithoutLink />
      <div className="choicepage">
          <Link to="/greenfo">
          <div className="choicepage__section">
            <img src="/public/assets/forest.jpg" alt="forest" />
            <div className="choicepage__section__links">GREENFO</div>
          </div>
          </Link>
          <Link to="/greenfo">
          <div className="choicepage__section">
            <img src="/public/assets/thinking.jpg" alt="thinking" />
            <div className="choicepage__section__links">QUIZZ</div>
          </div>
          </Link>
      </div>
    </>
  );
};

export default ChoicePage;
