import { Link } from "react-router-dom";
import "./Header.scss";

import MarvelLogo from "../assets/logoMarvel.svg";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <div className="containerHeader">
      <header className="headerPage">
        <Link to="/characters">
          <img src={MarvelLogo} alt="" />
        </Link>

        <div className="headerName">
          <Link to="/characters">
            <span>Characters</span>
          </Link>
          <Link to="/comics">
            <span>Comics</span>
          </Link>
          <Link to="/favorites">
            <span>Favorites</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
