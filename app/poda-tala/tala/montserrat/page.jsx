import React from 'react';
import Link from 'next/link';
import IntroTala from '../../components-poda-tala/cabecera/introTala';
import GridMaster from '../../components-poda-tala/grid/gridMasterTala';
import Empresas from '../../components-poda-tala/empresas/empresas';
import Location from '../../components-poda-tala/location/location';
import FaqMaster from '../../components-poda-tala/faq/faqmasterTala';
import SeoCards from '../../components-poda-tala/seo-cards/seocardsTala';
import SedaviLayout from '../../layout';

const Sedavi = () => {
  const municipio = "Montserrat";
  const enmunicipio = "en Montserrat";

  return (
    <div className="gartalia">
      <div className="master">
        <IntroTala municipio={municipio} />
        <GridMaster municipio={enmunicipio} />
      </div>
      
      <div className="faq">
        <div className="masterFaq">
          <FaqMaster />
        </div>
      </div>
      <div className="faq__banner">
        <span>¿Más preguntas? <Link href="tel:+34657170847">657 170 847</Link></span>
      </div>

      <div className="master">
        <Empresas />
        <Location />
      </div>



      <div className="master">
        <SeoCards municipio={enmunicipio} />
      </div>
    </div>
  );
};

Sedavi.getLayout = function getLayout(page) {
  return <SedaviLayout>{page}</SedaviLayout>;
};

export default Sedavi;
