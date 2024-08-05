import Image from "next/image";
import Link from 'next/link';
import '../app/style.scss';
import Intro from "./components/cabecera/intro";
import GridMaster from "./components/grid/gridMaster";
import Empresas from "./components/empresas/empresas";
import Location from "./components/location/location";
import Nosotros from "./components/nosotros&review/nosotros";
import Other from "./components/other/other";
import FaqMaster from "./components/faq/faqmaster";
import SeoCards from "./components/seo-cards/seocards";
 

export default function HomePage() {
  return (
    <div className="Gartalia">
      <div className="master">
        <Intro></Intro>
        <GridMaster></GridMaster>
        <Empresas></Empresas>
        <Location></Location>
        <Nosotros></Nosotros>
      </div>
      <div className="other">
        <div className="masterOther">
          <Other></Other>
        </div>
      </div><div className="faq">
        <div className="masterFaq">
          <FaqMaster></FaqMaster>
        </div>
      </div>
      <div className="faq__banner">
          <span>¿Más preguntas? <Link href="tel=+34658677423">658 677 423</Link></span>
      </div>

      <div className="master">
        <SeoCards></SeoCards>
      </div>
    </div>
    
  );
}
