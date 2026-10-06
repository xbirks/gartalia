"use client";

import React from 'react';
import "../../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../../contactForm';
import HeroBanner from './heroBanner';

function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1><span className="intro__h1-high">Poda y tala de árboles</span> grandes y difíciles en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        {/* El primer botón se oculta en pantallas medianas y pequeñas (intro.scss) */}
        <StandardButton
          link="#servicios"
          title="Leña troceada"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Tala por partes junto a casas"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Nos llevamos todos los restos"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#preguntas"
          title="Nos ocupamos del permiso"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />

      <h2 className="second_h2">Para particulares, comunidades, empresas y ayuntamientos</h2>
      <p className="second_p">Hay árboles que se pueden podar desde el suelo y árboles que no. Nosotros nos dedicamos a los segundos: <strong>pinos, palmeras y árboles de gran porte</strong>, muchas veces pegados a una casa, a una piscina o a un cable, donde cada corte hay que pensarlo antes. Llevamos más de 20 años haciéndolo en Valencia y alrededores, para particulares, comunidades, empresas y ayuntamientos como los de La Eliana y Llíria. <strong>Te explicamos qué necesita el árbol</strong>, te damos el precio antes de empezar y no nos vamos hasta dejarlo todo recogido.</p>
    </div>
  );
}

export default Intro;
