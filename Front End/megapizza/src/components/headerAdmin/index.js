import "./index.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";

export default function HeaderAdmin() {
  return (
    <div className="c-headerAdmin">
      <Link to="/"><img src={Logo} alt="Logo" title="Logo" className="logo"></img></Link>

      <div className="c-ha-nav">
        <h2>Administrador Logado</h2>
      </div>
    </div>
  );
}