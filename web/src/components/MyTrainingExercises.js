import React, { useEffect, useState } from "react";
import apiUser from "../services/api-users";
const MyTrainingExercises = (props) => {
  const userId = localStorage.getItem("userId");
  const [favouritesExercises, setFavouritesExercises] = useState([]);
  //Pedimos los ejercicios del usuario:
  useEffect(() => {
    apiUser.getUserExercises(userId).then((data) => {
      setFavouritesExercises(data.myFavouriteExercises);
    });
  }, [userId]);
  const renderFavouritesExercises = () => {
    return <ul> {renderFavs()}</ul>;
  };
  const handleFavourite = (exerciseId) => {
    const userId = localStorage.getItem("userId");
    apiUser.setExerciseFavourite(userId, exerciseId).then((res) => {
      setFavouritesExercises((prev) =>
        prev.filter((item) => {
          return item.id !== exerciseId;
        })
      );
    });
  };
  const renderFavs = () => {
    return favouritesExercises.map((exercise) => {
      return (
        <li key={exercise.id} className="card">
          <i
            className="fa-solid fa-heart card__fav"
            onClick={() => handleFavourite(exercise.id)}
          ></i>
          <img
            className="card__img"
            src={exercise.image}
            alt={`${exercise.name}`}
          />
          <h3 className="card__title uppercase">{exercise.name}</h3>
          <p className="card__description">
            How to do it: {exercise.description}
          </p>
          <p>Difficulty: {exercise.difficulty}</p>
        </li>
      );
    });
  };
  return (
    <section>
      <h1>These are your favorite exercises</h1>
      {renderFavouritesExercises()}
    </section>
  );
};
export default MyTrainingExercises;
