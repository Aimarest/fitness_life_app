import React from "react";
import apiUser from "../services/api-users";
const AllTrainigExercises = (props) => {
  const renderExercisesList = () => {
    return <ul className="cards">{renderAllExercises()}</ul>;
  };
  const handleFavourite = (exerciseId) => {
    const userId = localStorage.getItem("userId");
    apiUser.setExerciseFavourite(userId, exerciseId).then((res) => {
      console.log(res);
    });
  };

  const renderAllExercises = () => {
    return props.AllTrainigExercises.map((exercise) => {
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
      <h1>These are all training exercises:</h1>
      {renderExercisesList()}
    </section>
  );
};
export default AllTrainigExercises;
