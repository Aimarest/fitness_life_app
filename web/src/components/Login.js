import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
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
        <input className="button" type="submit" value="Log in" />
      </form>
    </section>
  );
};
export default Login;
