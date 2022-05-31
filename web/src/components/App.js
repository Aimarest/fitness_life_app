import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
//Services:
import getAllExercises from "../services/api-exercises";
import apiUser from "../services/api-users";
import getKitchenRecipes from "../services/api-kitchen-recipes";
import router from "../services/router";
import ls from "../services/local-storage";
//Components:
import Beginning from "./Beginning";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import KitchenRecipes from "./AllKitchenRecipes";
import TrainigExercises from "./AllTrainingExercises";
import MyKitchenRecipes from "./MyKitchenRecipes";
import MyTrainingExercises from "./MyTrainingExercises";
import Footer from "./Footer";

const App = () => {
  // state: user
  const identification = ls.get("userId", "");
  const [userId, setUserId] = useState(identification);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [AllTrainigExercises, setAllTrainingExercises] = useState([]);
  const [AllKitchenRecipes, setAllKitchenRecipes] = useState([]);
  const [favouritesExercises, setFavouritesExercises] = useState([]);
  const [favouritesRecipes, setFavouritesRecipes] = useState([]);
  //useEffect para que cada vez que cambie el userId se guarde en el localStorage:
  useEffect(() => {
    setUserId(userId);
    ls.set("userId", userId);
  }, [userId]);

  //Enviamos datos de registro al API:

  const sendSignUpToApi = (data) => {
    // Limpiamos el error antes de enviar los datos al API
    setSignUpErrorMessage("");
    apiUser.sendSignUpToApi(data).then((response) => {
      if (response.success === true) {
        setUserId(response.userId);
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de signup a su página de inicio
        router.redirect("/profile");
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };

  // Enviamos datos de login al API:
  const sendLoginToApi = (data) => {
    setLoginErrorMessage("");
    apiUser.sendLoginToApi(data).then((response) => {
      if (response.success === true) {
        setUserId(response.userId);
        router.redirect("/profile");
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setLoginErrorMessage(response.errorMessageLogin);
      }
    });
  };
  //Pedimos todos los ejercicios de entrenamiento al API:
  useEffect(() => {
    getAllExercises().then((data) => {
      setAllTrainingExercises(data.allExercises);
    });
  }, []);
  // Pedimos todas las recetas de cocina al API:
  useEffect(() => {
    getKitchenRecipes().then((data) => {
      setAllKitchenRecipes(data.allRecipes);
    });
  }, []);

  //Pedimos los ejercicios del usuario:
  useEffect(() => {
    apiUser.getUserExercises(userId).then((data) => {
      setFavouritesExercises(data.myFavouriteExercises);
    });
  }, [userId]);

  //Pedimos las recetas del usuario:
  useEffect(() => {
    apiUser.getUserRecipes(userId).then((data) => {
      setFavouritesRecipes(data.myFavouriteRecipes);
    });
  }, [userId]);
  /*
  Event: cerrar sesión.
  Redireccionamos al inicio de la página.
  Recargamos la página para que se borren todos los datos del estado de React.
  */
  const logout = () => {
    router.redirect("/");
    router.reload();
    // Añadimos esta sentencia para deslogear a la usuaria cuando pulsa el botón de 'Cerrar sesión'
    setUserId("");
  };

  return (
    <div className="App">
      <Header isUserLogged={!!userId} logout={logout} />
      <Routes>
        <Route path="/" element={<Beginning />} />
        <Route
          path="/login"
          element={
            <Login
              loginErrorMessage={loginErrorMessage}
              sendLoginToApi={sendLoginToApi}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              signUpErrorMessage={signUpErrorMessage}
              sendSignUpToApi={sendSignUpToApi}
            />
          }
        />
        <Route
          path="/kitchenRecipes"
          element={<KitchenRecipes AllKitchenRecipes={AllKitchenRecipes} />}
        />
        <Route
          path="/trainingExercises"
          element={
            <TrainigExercises AllTrainigExercises={AllTrainigExercises} />
          }
        />
        <Route
          path="/myKitchenRecipes"
          element={<MyKitchenRecipes favouritesRecipes={favouritesRecipes} />}
        />
        <Route
          path="/myTrainingExercises"
          element={
            <MyTrainingExercises favouritesExercises={favouritesExercises} />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
