import React from 'react';
import Link from 'next/link';
import IntroTala from '../../components-poda-tala/cabecera/introTala';
import Nosotros, { Resenas } from '../../../components/nosotros&review/nosotros';
import GridMaster from '../../components-poda-tala/grid/gridMasterTala';
import Empresas from '../../../components/empresas/empresas';
import Presupuesto from '../../../components/presupuesto/presupuesto';
import Location from '../../components-poda-tala/location/location';
import Other from '../../../components/other/other';
import FaqMaster from '../../components-poda-tala/faq/faqmasterTala';
import SeoCards from '../../components-poda-tala/seo-cards/seocardsTala';
import { BarraContacto } from '../../../components/contacto/botonesContacto';
import SedaviLayout from '../../layout';

// Mismo orden que la home: portada, reseñas, servicios, empresas, quién está detrás, formulario y zona.
// Después, otros servicios, preguntas y textos largos.
const Sedavi = () => {
  const municipio = "La Eliana";
  const enmunicipio = "en La Eliana";

  return (
    <div className="gartalia">
      <div className="master">
        <IntroTala municipio={municipio} />
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
