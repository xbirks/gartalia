"use client";

import React from 'react';
import "../../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../../contactForm';
import HeroBanner from './heroBanner';

function IntroTala({ municipio }) {
  return (
    <div className="intro__master">
      <h1><span className="intro__h1-high">Tala de árboles y pinos</span> en {municipio}, también pegados a la casa</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        {/* El primer botón se oculta en pantallas medianas y pequeñas (intro.scss) */}
        <StandardButton
          link="#servicios"
          title="Leña troceada"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Tala por partes"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Palmeras secas o con picudo"
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

      <h2 className="second_h2">Tala segura de árboles y palmeras</h2>
      <p className="second_p">Talar un pino de 20 metros en mitad de un campo es sencillo. Hacerlo a un metro de una fachada, con la piscina debajo y cables al lado, no lo es. Por eso, cuando no hay sitio para tumbar el árbol, <strong>lo desmontamos por partes desde arriba</strong> y bajamos cada trozo de forma controlada. Talamos <strong>pinos, palmeras, chopos, eucaliptos y árboles secos o enfermos</strong> en {municipio} y alrededores, nos ocupamos del permiso si hace falta y nos llevamos todo, o te dejamos la leña troceada si la quieres.</p>
    </div>
  );
}

export default IntroTala;
