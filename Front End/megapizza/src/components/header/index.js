import "./index.scss";

import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="c-header">
      <img src={Logo} alt="Logo" title='Logo' className='logo'></img>

      <div className="c-h-nav">
        <a href="/#">Cardapio</a>
        <a href="/#">Contato</a>
        <a href="/#">Sobre Nós</a>
      </div>
    </div>
  );
}
