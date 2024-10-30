import "./index.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";

export default function Header({ showContact, showHome }) {
  return (
    <div className="c-header">
      <Link to="/"><img src={Logo} alt="Logo" title="Logo" className="logo"></img></Link>

      <div className="c-h-nav">
        <Link to="/cardapio">Cardápio</Link>
        {showContact && <a href="#contact">Contato</a>} 
        {showHome && <Link to="/">Contato</Link>}
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
