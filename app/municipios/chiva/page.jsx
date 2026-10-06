import React from 'react';
import Link from 'next/link';
import Intro from '../../components/cabecera/intro';
import Nosotros, { Resenas } from '../../components/nosotros&review/nosotros';
import GridMaster from '../../components/grid/gridMaster';
import Empresas from '../../components/empresas/empresas';
import Presupuesto from '../../components/presupuesto/presupuesto';
import Location from '../../components/location/location';
import Other from '../../components/other/other';
import FaqMaster from '../../components/faq/faqmaster';
import SeoCards from '../../components/seo-cards/seocards';
import { BarraContacto } from '../../components/contacto/botonesContacto';
import SedaviLayout from './layout';

// Mismo orden que la home: portada, reseñas, servicios, empresas, quién está detrás, formulario y zona.
// Después, otros servicios, preguntas y textos largos.
const Sedavi = () => {
  const municipio = "Chiva";
  const enmunicipio = "en Chiva";

  return (
    <div className="gartalia">
      <div className="master">
        <Intro municipio={municipio} />
        <Resenas />
        <GridMaster municipio={enmunicipio} />
        <Empresas />
        <Nosotros />
        <Presupuesto />
        <Location municipio={enmunicipio} />
      </div>
      <div className="other">
        <div className="masterOther">
          <Other municipio={enmunicipio} />
        </div>
      </div>
      <div className="faq" id="preguntas">
        <div className="masterFaq">
          <FaqMaster />
        </div>
      </div>
      <div className="faq__banner">
        <span>¿Más preguntas? <Link href="tel:+34657170847">657 170 847</Link></span>
      </div>
      <div className="master">
        <SeoCards municipio={enmunicipio} />
      </div>
      <BarraContacto />
    </div>
  );
};

Sedavi.getLayout = function getLayout(page) {
  return <SedaviLayout>{page}</SedaviLayout>;
};

export default Sedavi;
