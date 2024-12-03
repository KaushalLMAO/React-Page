import React from "react";
import Home from "../Home/Home";
import { useState } from "react";
const Login = () => {
  const [logindet, setlogindet] = useState(false);
  const [logindata, setLogindata] = useState({});
  const login = (loggedon) => {
    loggedon.preventDefault();
    const formData = new FormData(loggedon.target);
    const data = Object.fromEntries(formData);
    setLogindata(data);
    setlogindet(true);
  };

  return (
    <div>
      {!logindet && (
        <form onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />{" "}
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
          <button type="submit">Submit</button>
        </form>
      )}
      {logindet ? <Home datareq={logindata} /> : "LogIn to Enter"}
    </div>
  );
};

export default Login;
