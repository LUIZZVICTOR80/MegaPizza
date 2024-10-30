import "./index.css";

import React, { useState } from "react";
import { register } from "../../api/api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSucess("");

    try {
      // Chama a função de registro com os dados do formulário
      const { message } = await register({ name, email, password });

      setSucess(message);
      alert(message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-page">
      <div className="s01-head">
        <Link to="/">
          <img src={Logo} alt="Logo" title="Logo" className="logo"></img>
        </Link>
      </div>

      <div className="section01">
        <h1>Cadastro</h1>
        <form onSubmit={handleRegister}>
          <div className="text">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
