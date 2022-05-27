import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const renderUnloggedUserLinks = () => {
    if (props.isUserLogged === false)
      return (
        <>
          <li>
            <Link className="nav__link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/signup">
              Sign Up
            </Link>
          </li>
        </>
      );
  };
  const renderLoggedUserLinks = () => {
    if (props.isUserLogged === true)
      return (
        <>
          <li>
            <Link to="/profile">My profile</Link>
          </li>
          <li>
            <Link to="/all-training-exercises">All training exercises</Link>
          </li>
          <li>
            <Link to="/all-kitchen-recipes">All kitchen recipes</Link>
          </li>
          <li>
            <Link to="/my-favourites-recipes">My favourites recipes</Link>
          </li>
          <li>
            <Link to="/my-favourites-exercises">My favourites exercises</Link>
          </li>
          <li className="nav_link">
            <span>Sign Out</span>
          </li>
        </>
      );
  };
  return (
    <header>
      <nav>
        <ul className="header__menu">
          <li className="nav_item">
            <link to="/">Beginning</link>
          </li>
          {renderUnloggedUserLinks()}
          {renderLoggedUserLinks()}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
