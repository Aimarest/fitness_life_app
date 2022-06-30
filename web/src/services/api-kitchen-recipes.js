const getAllRecipes = () => {
  const serverPort = process.env.PORT || 4000; 
  return fetch(`http://${serverPort}/kitchenRecipes`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default getAllRecipes;
