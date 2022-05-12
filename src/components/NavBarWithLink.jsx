import { Link } from "react-router-dom";

const NavBarWithLink = () => {
  return (
    <div className="navbarwithlink">
      <div>
        <Link to="/">
          <img src="../../public/assets/logo_green-my-mind.svg" alt="logo" />
        </Link>
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

export default NavBarWithLink;
