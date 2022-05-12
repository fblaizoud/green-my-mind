import { Link } from "react-router-dom";

const NavBarWithoutLink = () => {
  return (
    <div className="navbarwithoutlink">
      <Link to="/">
        <img src="../../public/assets/logo_green-my-mind.svg" alt="logo" />
      </Link>
    </div>
  );
};

export default NavBarWithoutLink;
