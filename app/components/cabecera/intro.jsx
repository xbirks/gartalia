"use client";

import React from 'react';
import "../../style.scss";
import "./intro.scss";
import HeroBanner from './heroBanner';
import BotonesContacto from '../contacto/botonesContacto';

// Los tres motivos para confiar van como texto con ✓, no como botones, para que no compitan con WhatsApp y llamar.
export const GARANTIAS = ['Te explicamos cada paso', 'Seguro de responsabilidad civil', 'Nos ocupamos del permiso'];
const ENTRADILLA = 'Pinos, palmeras y árboles grandes pegados a casas. Los bajamos por partes, nos encargamos del permiso de tala y lo dejamos todo limpio.';

function Check() {
  return (
    <svg className="intro__check" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.5l4 4 9-9" />
    </svg>
  );
}

// Portada: promesa, entradilla, botones de contacto y los tres motivos para confiar.
// El formulario va más abajo, después de «Quién está detrás» (components/presupuesto).
// Las páginas de poda y tala usan esta misma portada con su titular, su entradilla, sus ✓ y su mensaje de WhatsApp.
function Intro({ municipio, titulo, entradilla = ENTRADILLA, garantias = GARANTIAS, mensaje }) {
  return (
    <div className="intro__master">
      <h1>{titulo ?? <><span className="intro__h1-high">Poda y tala en altura</span> en {municipio}, sin riesgos para tu casa</>}</h1>
      <p className="intro__entradilla">{entradilla}</p>

      <BotonesContacto ubicacion="portada" mensaje={mensaje} />

      <ul className="intro__garantias">
        {garantias.map((garantia) => (
          <li key={garantia}><Check />{garantia}</li>
        ))}
      </ul>

      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />
    </div>
  );
}

export default Intro;
