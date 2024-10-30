import "./index.css";

import Zap from "../../assets/images/zap.png";
import Insta from "../../assets/images/insta.png";

export default function Footer() {
  return (
    <div className='c-footer'>
      <h1>Mega<span>Pizza</span></h1>

    <div className='f-text'>
      <p>Mega Pizza - Todos os direitos reservados</p>
      <p>R. Capão Redondo - Jardim Ângela</p>
      <p>São Paulo - SP, 12345-100</p>
      </div>

      <div className='f-images'>
        <img src={Zap} alt='Whatsapp' title='Whatsapp' className='zap'></img>
        <img src={Insta} alt='Instagram' title='Instagram' className='insta'></img>
      </div>
    </div>
  );
}