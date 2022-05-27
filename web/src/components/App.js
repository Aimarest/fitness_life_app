import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
//Services:
import apiExercises from "../services/api-exercises";
import apiUsers from "../services/api-users";
import apiKitchenRecipes from "../services/api-kitchen-recipes";
import router from "../services/router";
import ls from "../services/local-storage";
//Components:
import Beginning from "./Beginning";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import AllKitchenRecipes from "./AllKitchenRecipes";
import AllTrainigExercises from "./AllTrainingExercises";
import MyKitchenRecipes from "./MyKitchenRecipes";
import MyTrainingExercises from "./MyTrainingExercises";
import Footer from "./Footer";

const App = () => {
  // state: user
  const identification = ls.get("userId", "");
  const [userId, setUserId] = useState(identification);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userKitchenRecipes, setUserKitchenRecipes] = useState([]);
  const [userTrainingExercises, setUserTrainingExercises] = useState([]);
  const [allKitchenRecipes, setAllKitchenRecipes] = useState([]);
  const [allTrainingExercises, setAllTrainingExercises] = useState([]);
  /*
  Event: cerrar sesión.
  Redireccionamos al inicio de la página.
  Recargamos la página para que se borren todos los datos del estado de React.
  */
  const logout = () => {
    router.redirect("/");
    router.reload();
    // he añadido esta sentencia para deslogear a la usuaria cuando pulsa el botón de 'Cerrar sesión'
    setUserId("");
  };

  return (
    <div className="App">
      <Header isUserLogged={!!userId} logout={logout} />
      <Switch>
        <Route exact path="/">
          <Beginning />{" "}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/profile">
          <Profile
            userName={userName}
            userEmail={userEmail}
            userPassword={userPassword}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
