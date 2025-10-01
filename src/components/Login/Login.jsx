import React, { useState } from "react";
import Header from "../Header/Header";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    console.log("Email:", email);
    console.log("Senha:", password);

    if (email && password) {
      onLogin({ email });
    } else {
      setError("Preencha todos os campos");
    }
  }

  return (
    <div className="login__page">
      <Header></Header>
      <div className="login__container">
        <form onSubmit={handleSubmit} className="login__form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
}
