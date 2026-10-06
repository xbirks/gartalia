import Image from "next/image";
import Link from 'next/link';
import '../app/style.scss';
import Intro from "./components/cabecera/intro";
import GridMaster from "./components/grid/gridMaster";
import Empresas from "./components/empresas/empresas";
import Location from "./components/location/location";
import Nosotros, { Resenas } from "./components/nosotros&review/nosotros";
import Presupuesto from "./components/presupuesto/presupuesto";
import Other from "./components/other/other";
import FaqMaster from "./components/faq/faqmaster";
import SeoCards from "./components/seo-cards/seocards";
import { BarraContacto } from "./components/contacto/botonesContacto";
import { metadataHome } from "./lib/seo";

export const metadata = metadataHome;


// Orden: qué hacemos (portada) → por qué fiarse (reseñas) → servicios → ayuntamientos y empresas que confían
// → quién está detrás → formulario, cuando el visitante ya está convencido. Después, zona, otros servicios y preguntas.
export default function HomePage() {
  return (
    <div className="Gartalia">
      <div className="master">
        <Intro municipio="Valencia"></Intro>
        <Resenas></Resenas>
        <GridMaster municipio=""></GridMaster>
        <Empresas></Empresas>
        <Nosotros></Nosotros>
        <Presupuesto></Presupuesto>
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
