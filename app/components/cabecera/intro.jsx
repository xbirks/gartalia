"use client";

import React from 'react';
import "../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../contactForm';
import HeroBanner from './heroBanner';

function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1><span className="intro__h1-high">Poda y tala en altura</span> en {municipio}, donde otros no se atreven</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        {/* El primer botón se oculta en pantallas medianas y pequeñas (intro.scss) */}
        <StandardButton
          link="/#parcelas"
          title="Limpieza de parcelas"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/poda-tala"
          title="Pinos y palmeras muy altos"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/poda-tala"
          title="Árboles pegados a la casa"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/#preguntas"
          title="Nos ocupamos del permiso"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />
    </div>
  );
}

export default Intro;
