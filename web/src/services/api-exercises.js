const getAllExercises = () => {
  return fetch("http://localhost:4000/trainingExercises")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default getAllExercises;
