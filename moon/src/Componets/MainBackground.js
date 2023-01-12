import React from 'react';

import VestidoNegro1 from '../imagenes/vestidoNegro.jpg';
import VestidoNegro2 from '../imagenes/vestidoNegro2.jpg';
import '../css/MainBackground.css';

const MainBackground = () => {
  return (
    <section className="fondo-nav">
        <img src={VestidoNegro2}></img>
        <img src={VestidoNegro1}></img>
    </section>
  )
}

export default MainBackground