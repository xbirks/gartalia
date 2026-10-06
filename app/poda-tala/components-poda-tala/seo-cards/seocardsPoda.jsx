"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import pinos from '../../../assets/img/podaseo.jpg';
import palmeras from '../../../assets/img/palmerasseo.jpg';
import hotel from '../../../assets/img/podahotel.jpg';

function SeoCards({ municipio }) {
  // municipio llega como "en Paterna", o como "en Valencia" en la página principal de poda y tala
  const en = municipio ? ` ${municipio}` : '';

  return (
    <div className="seoCards">
      <Card
        title={`¿Cuándo hay que podar un pino${en}?`}
        info={
          <>
            Los pinos se podan mejor en los meses fríos, de finales de otoño a finales de invierno. Con una poda cada pocos años se quitan las ramas secas, se aligera la copa y el árbol aguanta mucho mejor los temporales.
            <br />
            <br />
            Lo que no conviene es esperar a que una rama caiga sobre el tejado o la piscina. Si tu pino tiene ramas secas, cuelga hacia la casa o hace años que nadie lo toca, <strong>mándanos una foto</strong> y te decimos qué necesita.
          </>
        }
        img={pinos}
        alt="Poda en altura de un árbol grande"
      />

      <Card
        title={`Poda de palmeras y picudo rojo${en}`}
        info={
          <>
            Las palmeras necesitan una limpieza de hojas secas y racimos cada uno o dos años. En Valencia, además, hay que vigilarlas por el <strong>picudo rojo</strong>, un escarabajo que se come la palmera por dentro y puede acabar tirando la copa.
            <br />
            <br />
            Las podamos preferentemente en invierno, cuando el picudo está menos activo, y aprovechamos para revisar si hay síntomas. Si la palmera ya está muy afectada, te lo decimos claro: es mejor talarla antes de que sea un peligro.
          </>
        }
        img={palmeras}
        alt="Trepador podando una palmera alta"
      />

      <Card
        title={`Poda para hoteles, comunidades y urbanizaciones${en}`}
        info={
          <>
            En un hotel, un club o una comunidad de vecinos, un árbol mal cuidado es un riesgo para mucha gente. Han confiado en nosotros el resort El Oasis de La Eliana, el Club de Tenis El Collao y los ayuntamientos de La Eliana y Llíria.
            <br />
            <br />
            Te damos el <strong>presupuesto por escrito</strong>, organizamos el trabajo para molestar lo mínimo a clientes y vecinos, y dejamos las zonas comunes limpias el mismo día que terminamos.
          </>
        }
        img={hotel}
        alt="Jardines de un hotel con palmeras altas"
      />
    </div>
  );
}

export default SeoCards;
