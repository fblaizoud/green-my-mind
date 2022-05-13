import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const NavBarWithLink = ({ title }) => {
  return (
    <div className="navbarwithlink">
      <div>
        <Link to="/">
          <img src="/assets/logo_green-my-mind.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbarwithlink__links">
        {title && title !== "food" && (
          <Link to="/greenfo/food">
            <div>FOOD</div>
          </Link>
        )}
        {title && title !== "transport" && (
          <Link to="/greenfo/transport">
            <div>TRANSPORT</div>
          </Link>
        )}
        {title && title !== "housing" && (
          <Link to="/greenfo/housing">
            <div>HOUSING</div>
          </Link>
        )}
        {title && title !== "clothing" && (
          <Link to="/greenfo/clothing">
            <div>CLOTHING</div>
          </Link>
        )}
      </div>
      <div className="navbarwithlink__links">
        <Link to="/greenfo">
          <div>GREENFO</div>
        </Link>
        <Link to="/quiz">
          <div>QUIZ</div>
        </Link>
      </div>
    </div>
  );
};

NavBarWithLink.propTypes = {
  title: Proptypes.string.isRequired,
};

export default NavBarWithLink;
