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
  /*
  useEffect(() => {
    fetch("https://localhost:4000") 
      .then((response) => response.json())
      .then((responseData) => {
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
        (responseData);
      });
  }, []);
*/
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Beginning />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
