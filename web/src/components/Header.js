import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const renderUnloggedUserLinks = () => {
    if (props.isUserLogged === false)
      return (
        <>
          <li>
            <Link className="header__link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/">
              Begining
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
            <Link className="header__link" to="/profile">
              My profile
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/myKitchenRecipes">
              My kitchen recipes
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/myTrainingExercises">
              My training exercises
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/trainingExercises">
              All training exercises
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/kitchenRecipes">
              All kitchen recipes
            </Link>
          </li>
          <li className="close">
            <span className="header__link" onClick={props.logout}>
              Cerrar sesión
            </span>
          </li>
        </>
      );
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          {renderUnloggedUserLinks()}
          {renderLoggedUserLinks()}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
