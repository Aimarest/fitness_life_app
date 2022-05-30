import React from "react";
const AllTrainigExercises = (props) => {
  const renderExercisesList = () => {
    return <ul className="cards">{renderAllExercises()}</ul>;
  };
  // const handleFavourite = () => {};

  const renderAllExercises = () => {
    return props.AllTrainigExercises.map((exercise) => {
      return (
        <li key={exercise.id} className="card">
          <i
            className="fa-solid fa-heart card__fav"
            // onClick={() => handleFavourite(exercise.id)}
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
  return renderExercisesList();
};
export default AllTrainigExercises;
