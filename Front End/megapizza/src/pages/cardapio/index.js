import "./index.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { getPizzas } from "../../api/api.js";

export default function Cardapio() {
  const [pizzas, setPizzas] = useState([]); // Estado para armazenar as pizzas
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const data = await getPizzas(); // Chama a função para obter pizzas
        console.log(data);
        setPizzas(data); // Atualiza o estado com os dados das pizzas
      } catch (err) {
        setError("Erro ao carregar o cardápio."); // Define mensagem de erro
      }
    };

    fetchPizzas(); // Chama a função ao montar o componente
  }, []); // O array vazio significa que o useEffect será chamado apenas uma vez

  return (
    <div className="cardapio-page">
      <Header showContact={false} showHome={true}/>

      <div className="section01">
        <h1>Cardápio</h1>
        {error && (
          <p style={{ color: "red", fontFamily: "Inter", fontSize: "18px" }}>
            {error}
          </p>
        )}{" "}
        {/* Exibe mensagem de erro se houver */}
        <div className="pizza-card">
          {pizzas.map((pizza) => (
            <div className="pizza-item" key={pizza.id}>
              <img
                className="pizza-image"
                src={pizza.url}
                alt={pizza.name} 
                title={pizza.name}
              />
              <h2 className="pizza-name">{pizza.name}</h2>
              <p className="pizza-description">{pizza.desc}</p>
              <p className="pizza-price">R$ {(Number(pizza.price) || 0).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
