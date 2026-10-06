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
      <h1><span className="intro__h1-high">Poda en altura</span> en {municipio}: pinos, palmeras y árboles grandes</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        {/* El primer botón se oculta en pantallas medianas y pequeñas (intro.scss) */}
        <StandardButton
          link="#servicios"
          title="Recogida de todos los restos"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Ramas secas y peligrosas"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Palmeras de cualquier altura"
          style="emptyStandardButton"
        />
        <StandardButton
          link="#servicios"
          title="Pinos sobre tejados y piscinas"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />

      <h2 className="second_h2">Poda de árboles para particulares, comunidades y empresas</h2>
      <p className="second_p">Una buena poda en altura no consiste en cortar mucho, sino en cortar bien: quitar las ramas secas o que cargan hacia la casa, aligerar el peso de la copa y dejar el árbol equilibrado para que aguante el viento. Lo hacemos en <strong>pinos, palmeras, olivos, algarrobos, cipreses y chopos</strong>, que es lo que más encontramos en los jardines de {municipio} y alrededores. <strong>Subimos con arnés o con plataforma</strong>, según el árbol y el acceso, y al terminar retiramos todas las ramas.</p>
    </div>
  );
}

export default Intro;
