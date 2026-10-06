import Image from "next/image";
import Link from 'next/link';
import '../app/style.scss';
import Intro from "./components/cabecera/intro";
import GridMaster from "./components/grid/gridMaster";
import Empresas from "./components/empresas/empresas";
import Location from "./components/location/location";
import Nosotros, { Resenas } from "./components/nosotros&review/nosotros";
import Other from "./components/other/other";
import FaqMaster from "./components/faq/faqmaster";
import SeoCards from "./components/seo-cards/seocards";
import { BarraContacto } from "./components/contacto/botonesContacto";
import { metadataHome } from "./lib/seo";

export const metadata = metadataHome;


// Orden: portada, reseñas y empresas que confían (la prueba, pronto), servicios, quién está detrás y zona.
export default function HomePage() {
  return (
    <div className="Gartalia">
      <div className="master">
        <Intro municipio="Valencia"></Intro>
        <Resenas></Resenas>
        <Empresas></Empresas>
        <GridMaster municipio=""></GridMaster>
        <Nosotros resenas={false}></Nosotros>
        <Location></Location>
      </div>
      <div className="other">
        <div className="masterOther">
          <Other municipio="en Valencia"></Other>
        </div>
      </div><div className="faq" id="preguntas">
        <div className="masterFaq">
          <FaqMaster></FaqMaster>
        </div>
      </div>
      <div className="faq__banner">
      <span>¿Más preguntas? <Link href="tel:+34657170847">657 170 847</Link></span>
      </div>

      <div className="master">
        <SeoCards  municipio="" ></SeoCards>
      </div>
      <BarraContacto />
    </div>

  );
}
