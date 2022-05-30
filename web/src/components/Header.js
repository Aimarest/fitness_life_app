import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const renderUnloggedUserLinks = () => {
    if (props.isUserLogged === false)
      return (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/">Begining</Link>
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
            <Link to="/myKitchenRecipes">My kitchen recipes</Link>
          </li>
          <li>
            <Link to="/myTrainingExercises">My training exercises</Link>
          </li>
          <li>
            <Link to="/trainingExercises">All training exercises</Link>
          </li>
          <li>
            <Link to="/kitchenRecipes">All kitchen recipes</Link>
          </li>
          <li className="close">
            <span onClick={props.logout}>Cerrar sesión</span>
          </li>
        </>
      );
  };
  return (
    <header className="header">
      <nav>
        <ul>
          {renderUnloggedUserLinks()}
          {renderLoggedUserLinks()}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
