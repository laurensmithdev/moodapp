// src/app/signup/SignupForm.tsx
"use client";

import React, { useState } from "react";
import "./signup.css";

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form submitted with:", {
      name,
      email,
      password,
    });

    console.log("Signup successful");

    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          id="name"
          className="name-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-container ic2">
        <input
          id="password"
          className="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-container ic3">
        <input
          id="email"
          className="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
