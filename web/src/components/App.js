import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
//Services:
import apiExercises from "../services/api-exercises";
import apiUser from "../services/api-users";
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
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
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
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Beginning />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={
            <SignUp
              signUpErrorMessage={signUpErrorMessage}
              sendSignUpToApi={sendSignUpToApi}
            />
          }
        />
        <Route path="/kitchenRecipes" element={<AllKitchenRecipes />} />
        <Route path="/trainingExercises" element={<AllTrainigExercises />} />
        <Route path="/myKitchenRecipes" element={<MyKitchenRecipes />} />
        <Route path="/myTrainingExercises" element={<MyTrainingExercises />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
