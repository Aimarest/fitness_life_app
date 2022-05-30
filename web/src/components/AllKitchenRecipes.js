import React from "react";
const AllKitchenRecipes = (props) => {
  const renderRecipesList = () => {
    return <ul className="recipesCards">{renderAllRecipes()}</ul>;
  };
  const renderAllRecipes = () => {
    return props.AllKitchenRecipes.map((recipe) => {
      return (
        <li key={recipe.id} className="recipeCard">
          <i
            className="fa-solid fa-heart card__fav"
            // onClick={() => handleFavourite(exercise.id)}
          ></i>
          <h3 className="recipeCard__title uppercase">{recipe.name}</h3>
          <p className="recipeCard__description">
            How to do it: {recipe.description}
          </p>
          <p className="recipeCard__difficulty">
            Difficulty: {recipe.difficulty}
          </p>
        </li>
      );
    });
  };
  return renderRecipesList();
};
export default AllKitchenRecipes;
