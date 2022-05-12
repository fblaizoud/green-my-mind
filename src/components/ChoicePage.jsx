import { Link } from "react-router-dom";
import NavBarWithoutLink from "./NavBarWithoutLink";

const ChoicePage = () => {
  return (
    <>
      <NavBarWithoutLink />
      <div className="choicepage">
        <Link to="/greenfo">
          <div className="choicepage__links">GREENFO</div>
        </Link>
        <Link to="/quiz">
          <div className="choicepage__links">QUIZ</div>
        </Link>
      </div>
    </>
  );
};

export default ChoicePage;
