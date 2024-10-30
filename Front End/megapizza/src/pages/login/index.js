import "./index.css";

import React, { useState } from "react";
import { login } from "../../api/api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSucess("");

    try {
      const { token, message } = await login(email, password);
      localStorage.setItem("token", token);

      setSucess(message);
      alert(message);

      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="s01-head">
        <Link to="/">
          <img src={Logo} alt="Logo" title="Logo" className="logo"></img>
        </Link>
      </div>

      <div className="section01">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="text">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p
              style={{ color: "black", fontFamily: "Inter", fontSize: "18px" }}
            >
              {error}
            </p>
          )}{" "}
          {/* Mensagem de erro */}
          <button type="submit">Entrar</button>
          <Link to="/register">
            <button>Crie sua Conta Aqui</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
