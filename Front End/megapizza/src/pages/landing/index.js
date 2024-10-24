import "./index.scss";

import Header from "../../components/header";
import Logo from "../../assets/images/logo.png";
import Image01 from "../../assets/images/image01.png";
import Image02 from "../../assets/images/image02.png";
import Image03 from "../../assets/images/image03.png";
import Image04 from "../../assets/images/image04.png";
import Image05 from "../../assets/images/image05.png";
import Footer from "../../components/footer";

export default function Landing() {
  return (
    <div className="landing-page">
      <Header />

      <div className="section01">
        <div className="s01-text">
          <h1 className="s01-title">
            <span className="s01-titlecolor01">Mega</span>
            <span className="s01-titlecolor02">Pizza</span>
          </h1>

          <p className="s01-subtitle">
            Na Mega Pizza, cada fatia é feita com paixão e servida com
            qualidade. Aqui, o sabor autêntico e o atendimento de primeira andam
            lado a lado para tornar sua experiência única.
          </p>
        </div>

        <img src={Image01} alt="Pizza" title="Pizza" className="image01"></img>
      </div>

      <div className="section02">
        <h1 className="s02-titlepage">Especialidades da Casa</h1>

        <div className="s02-texts">
          <div className="s02-text01">
            <h2 className="s02-title01">Mussarela</h2>
            <img
              src={Image02}
              alt="Mussarela"
              title="Mussarela"
              className="image02"
            ></img>
            <p className="s02-text01">
              A clássica pizza de mussarela, feita com uma generosa camada de
              queijo derretido sobre um molho de tomate saboroso, proporcionando
              um sabor simples e irresistível.
            </p>
          </div>

          <div className="s02-text02">
            <h2 className="s02-title02">Peperoni</h2>
            <img
              src={Image03}
              alt="Peperoni"
              title="Peperoni"
              className="image03"
            ></img>
            <p className="s02-text02">
              Pizza com fatias de peperoni levemente apimentadas, combinadas com
              queijo derretido e molho de tomate, oferecendo uma explosão de
              sabor marcante e apimentado.
            </p>
          </div>

          <div className="s02-text03">
            <h2 className="s02-title03">Frango c/ Catupiry</h2>
            <img
              src={Image04}
              alt="Frango c/ Catupiry"
              title="Frango c/ Catupiry"
              className="image04"
            ></img>
            <p className="s02-text03">
              Uma combinação deliciosa de frango desfiado e cremoso catupiry,
              cobertos com queijo e molho, para uma experiência cheia de sabor e
              cremosidade.
            </p>
          </div>
        </div>
      </div>

      <div className="section03">
        <img
          src={Image05}
          alt="Delivery"
          title="Delivery"
          className="image05"
        ></img>

        <div className="s03-text">
          <h1 className="s03-title">Delivery</h1>

          <p className="s03-subtitle">
            Na Mega Pizza, o sabor chega até você. Faça seu pedido e receba
            nossas deliciosas pizzas no conforto da sua casa.
          </p>
        </div>
      </div>

      <div className="section04">
        <div className="s04-text">
          <h1 className="s04-title">
            Garanta sua mesa na Mega{" "}
            <span className="s04-titlecolor">Pizza</span>!
          </h1>
          <h3 className="s04-subtitle">
            Reserve com antecedência e desfrute de uma experiência gastronômica
            única.
          </h3>
        </div>

        <a href="/#" className="s04-button">
          Reserve Aqui
        </a>
      </div>

      <div className="section05">
        <div className="s05-head">
          <img src={Logo} alt="Logo" title="Logo" className="logo"></img>
        </div>

        <div className="s05-form">
          <h2 className="form-title">Entre em Contato</h2>

          <form>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Número" required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}