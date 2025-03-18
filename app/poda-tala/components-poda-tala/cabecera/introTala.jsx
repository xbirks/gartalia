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
      <h1><span className="intro__h1-high">Tala en altura</span> de árboles o palmeras <span className="intro__h1-high">rápida y segura</span> en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        <StandardButton
          link="/"
          title="Tala controlada en altura"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Tala especializada en palmeras"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Tala segura en altura"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Talas preventivas"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />

      <h2 className="second_h2">Tala de árboles y palmeras para particulares y empresas</h2>
      <p className="second_p">La tala segura de árboles y palmeras es esencial <strong>para prevenir riesgos</strong> en jardines, parcelas y espacios públicos en la Comunidad Valenciana. Con más de 20 años de experiencia en el sector, ofrecemos servicios especializados en la tala controlada de especies típicas como <strong>pinos, palmeras, cipreses, algarrobos, olivos y encinas</strong>, muy presentes en nuestra región mediterránea. Nuestro equipo cualificado emplea técnicas avanzadas y equipamiento moderno <strong>para garantizar intervenciones rápidas y seguras</strong>, incluso en zonas complicadas o de difícil acceso. Confíe en nuestra experiencia para retirar con seguridad árboles o palmeras peligrosas o en mal estado, protegiendo así su entorno y propiedades.</p>
    </div>
  );
}

export default IntroTala;
