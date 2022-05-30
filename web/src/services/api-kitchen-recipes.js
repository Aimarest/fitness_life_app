const getAllRecipes = () => {
  return fetch("http://localhost:4000/kitchenRecipes")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default getAllRecipes;
