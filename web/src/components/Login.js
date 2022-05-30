import React, { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const handleForm = (ev) => {
    ev.preventDefault();
    setLoginErrorMessage(false);
  };
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    props.sendLoginToApi(data);
  };
  const renderErrorMessage = () => {
    // Si el API ha devuelto un error, APP lo guarda en el estado y nos lo pasa
    if (props.loginErrorMessage !== "") {
      return (
        <p className="errorMessage">Login error: {props.loginErrorMessage}</p>
      );
    }
  };

  return (
    <section>
      <h1 className="title">Login</h1>
      <form className="formLogin" onSubmit={handleForm}>
        {" "}
        <label className="formLogin__label" htmlFor="email">
          Write your email
        </label>
        <input
          className="formLogin__input"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label className="formLogin__label" htmlFor="password">
          Write your password
        </label>
        <input
          className="formLogin__input"
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <input
          className="button"
          type="submit"
          value="Log in"
          onClick={handleLogin}
        />
        {renderErrorMessage()}
      </form>
    </section>
  );
};
export default Login;
