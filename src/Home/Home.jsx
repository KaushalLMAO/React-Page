import React from "react";
import Login from "../Login/Login";
const Home = ({ datareq }) => {
  return (
    <div>
      <h1>Welcome, {datareq.name}</h1>
      <p> Your Email is, {datareq.email}</p>
    </div>
  );
};

export default Home;
