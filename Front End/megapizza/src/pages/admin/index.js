import "./index.css";

import HeaderAdmin from "../../components/headerAdmin";
import { Link } from 'react-router-dom';

export default function Admin() {

  return(
    <div className="admin-page">
      <HeaderAdmin />

      <h1>Página do Administrador</h1>


    </div>
  );
}