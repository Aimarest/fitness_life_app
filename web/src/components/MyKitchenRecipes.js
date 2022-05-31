import React, { useEffect, useState } from "react";
import apiUser from "../services/api-users";

const MyKitchenRecipes = (props) => {
  const [favouritesRecipes, setFavouritesRecipes] = useState([]);
  //Pedimos las recetas del usuario:
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    apiUser.getUserRecipes(userId).then((data) => {
      setFavouritesRecipes(data.myFavouriteRecipes);
    });
  }, []);
  const renderFavouritesRecipes = () => {
    return <ul>{renderFavs()}</ul>;
  };
  const handleFavourite = (recipeId) => {
    const userId = localStorage.getItem("userId");
    apiUser.setRecipeFavourite(userId, recipeId).then((res) => {
      setFavouritesRecipes((prev) =>
        prev.filter((item) => {
          return item.id !== recipeId;
        })
      );
    });
  };
  const renderFavs = () => {
    return favouritesRecipes.map((recipe) => {
      return (
        <li key={recipe.id} className="card">
          <i
            className="fa-solid fa-heart card__fav"
            onClick={() => handleFavourite(recipe.id)}
          ></i>
          <h3 className="card__title uppercase">{recipe.name}</h3>
          <p className="card__description">
            How to do it: {recipe.description}
          </p>
          <p>Difficulty: {recipe.difficulty}</p>
        </li>
      );
    });
  };

  return (
    <section>
      <h1>These are your favorite recipes</h1>
      {renderFavouritesRecipes()}
    </section>
  );
};
export default MyKitchenRecipes;
