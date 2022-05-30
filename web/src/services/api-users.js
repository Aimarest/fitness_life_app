// Sign up

const sendSignUpToApi = (data) => {
  return fetch("http://localhost:4000/signup", {
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
  return fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
const objectToExport = {
  sendSignUpToApi: sendSignUpToApi,
  sendLoginToApi: sendLoginToApi,
};
export default objectToExport;
