"use client";
import React, { useState } from "react";
import stlyes from "./login.module.css";

const LoginPage: React.FC = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");
  console.log("username", username);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername(usernameInput);
  };

  return (
    <div className={stlyes.container}>
      <form className={stlyes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={handleInputChange}
        ></input>
        <button className={stlyes.button} type="submit">
          BUTTON
        </button>
      </form>
      {username ? (
        <h1 className={stlyes.box}>Hello, {username}</h1>
      ) : (
        <h1 className={stlyes.box}></h1>
      )}
    </div>
  );
};

export default LoginPage;
