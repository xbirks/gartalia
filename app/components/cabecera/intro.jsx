"use client";

import React from 'react';
import "../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../contactForm';
import HeroBanner from './heroBanner';
import BotonesContacto from '../contacto/botonesContacto';

// Portada: promesa, los tres motivos para confiar, entradilla y botones de contacto.
// Los botones «Pedir presupuesto» de la página llevan al formulario (#presupuesto).
function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1><span className="intro__h1-high">Poda y tala en altura</span> en {municipio}, sin riesgos para tu casa</h1>
      <div className="intro__mejores-servicios">
        {/* El primer botón se oculta en pantallas medianas y pequeñas (intro.scss) */}
        <StandardButton
          link="/#parcelas"
          title="Limpieza de parcelas"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/poda-tala#como-trabajamos"
          title="Te explicamos cada paso"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/#preguntas"
          title="Seguro de responsabilidad civil"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/#preguntas"
          title="Nos ocupamos del permiso"
          style="emptyStandardButton"
        />
      </div>
      <p className="intro__entradilla">
        Pinos, palmeras y árboles grandes pegados a casas. Los bajamos por partes, nos encargamos del permiso de tala y lo dejamos todo limpio.
      </p>

      <BotonesContacto ubicacion="portada" />

      <div id="presupuesto">
        <ContactForm />
      </div>
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />
    </div>
  );
}

export default Intro;
