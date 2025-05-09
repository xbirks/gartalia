import React from 'react';
import Link from 'next/link';
import Intro from '../../components/cabecera/intro';
import GridMaster from '../../components/grid/gridMaster';
import Empresas from '../../components/empresas/empresas';
import Location from '../../components/location/location';
import Nosotros from '../../components/nosotros&review/nosotros';
import Other from '../../components/other/other';
import FaqMaster from '../../components/faq/faqmaster';
import SeoCards from '../../components/seo-cards/seocards';
import ValenciaLayout from './layout';

const Valencia = () => {
  const municipio = "Valencia";
  const enmunicipio = "en Valencia";

  return (
    <div className="gartalia">
      <div className="master">
        <Intro municipio={municipio} />
        <GridMaster municipio={enmunicipio} />
        <Empresas />
        <Location />
        <Nosotros />
      </div>
      <div className="other">
        <div className="masterOther">
          <Other municipio={enmunicipio} />
        </div>
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
        <SeoCards municipio={enmunicipio} />
      </div>
    </div>
  );
};

Valencia.getLayout = function getLayout(page) {
  return <ValenciaLayout>{page}</ValenciaLayout>;
};

export default Valencia;
