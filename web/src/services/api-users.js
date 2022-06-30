// Sign up

const sendSignUpToApi = (data) => {
  const serverPort = process.env.PORT || 4000; 
  return fetch(`http://${serverPort}/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

//Login
const sendLoginToApi = (data) => {
  return fetch(`http://${serverPort}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
//Profile:
const getProfileFromApi = (userId) => {
  return fetch(`http://${serverPort}/profile`, {
    headers: {
      "user-id": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const setRecipeFavourite = (userId, recipeId) => {
  const data = {
    recipeId: recipeId.toString(),
  };
  return fetch(`http://${serverPort}/myKitchenRecipes`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "user-id": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
const setExerciseFavourite = (userId, exerciseId) => {
  const data = {
    exerciseId: exerciseId.toString(),
  };
  return fetch(`http://${serverPort}/myTrainingExercises`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "user-id": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
//Pedimos los ejercicios del usuario:
const getUserExercises = (userId) => {
  return fetch(`http://${serverPort}/myTrainingExercises`, {
    headers: {
      "user-id": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
//Pedimos las recetas del usuario:
const getUserRecipes = (userId) => {
  return fetch(`http://${serverPort}/myKitchenRecipes`, {
    headers: {
      "user-id": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
const sendProfileToApi = (userId, data) => {
  //Body params:
  const bodyParams = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  return fetch(`http://${serverPort}/profile`, {
    method: "POST",
    body: JSON.stringify(bodyParams),
    headers: {
      "Content-Type": "application/json",
      "user-id": userId,
    },
  })
    .then((response) => response.json())

    .then((data) => {
      return data;
    });
};
const objectToExport = {
  sendSignUpToApi: sendSignUpToApi,
  sendLoginToApi: sendLoginToApi,
  setRecipeFavourite: setRecipeFavourite,
  setExerciseFavourite: setExerciseFavourite,
  getUserExercises: getUserExercises,
  getUserRecipes: getUserRecipes,
  sendProfileToApi: sendProfileToApi,
  getProfileFromApi: getProfileFromApi,
};
export default objectToExport;
