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
const objectToExport = { sendSignUpToApi: sendSignUpToApi };
export default objectToExport;
