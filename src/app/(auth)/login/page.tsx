"use client";
import React, { useState } from "react";
import stlyes from "./login.module.css";

// Here I am using FormData() function to handle inputs instead of useState
const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("formData", formData);
    console.log("username field value:", formData.get("username"));//  Did it log?
    console.log("username field value:", formData.get("password"));//  Did it log?
    event.currentTarget.reset();
  };

  return (
    <div className={stlyes.container}>
      <form className={stlyes.form} onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="text" name="password" placeholder="Password"></input>
        <button className={stlyes.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
