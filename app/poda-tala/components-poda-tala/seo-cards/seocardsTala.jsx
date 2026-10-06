"use client";

import Image from 'next/image';
import Link from 'next/link';
import Card from '../../../components/seo-cards/card'; // la misma tarjeta de la home (trae sus estilos), con el WhatsApp de cada tema

//IMG
import talapino from '../../../assets/img/licencia.jpg';
import emergencia from '../../../assets/img/arbolcaio.jpg';
import grua from '../../../assets/img/grua.jpg';

function SeoCards({ municipio }) {
  // municipio llega como "en Paterna", o como "en Valencia" en la página principal de poda y tala
  const en = municipio ? ` ${municipio}` : '';

  return (
    <div className="seoCards">
      <Card
        title={`¿Cuándo hay que talar un árbol${en}?`}
        info={
          <>
            Cuando está seco, muy enfermo o inclinado con riesgo de caer, cuando sus raíces están rompiendo la casa, las tuberías o la piscina, o cuando una palmera tiene el picudo rojo muy avanzado.
            <br />
            <br />
            Si el árbol se puede salvar con una poda, te lo diremos: talar es el último recurso. Y si hay que talarlo, lo hacemos con la zona acotada, <strong>con seguro de responsabilidad civil</strong> y sin dejar ni una rama en el suelo.
          </>
        }
        img={talapino}
        alt="Tala de un pino con motosierra"
        mensaje={`Hola, tengo un árbol que quizá haya que talar${en} y quiero que lo veáis.`}
      />

      <Card
        title={`Árbol caído tras un temporal${en}: qué hacer`}
        info={
          <>
            Lo primero, aléjate y no intentes cortarlo tú: un tronco caído suele estar en tensión y puede saltar al cortarlo. Si hay cables afectados, avisa también a la compañía eléctrica.
            <br />
            <br />
            Después, llámanos al 657 170 847 y mándanos fotos. Estos avisos los atendemos antes que el resto: <strong>aseguramos la zona, cortamos el árbol por partes</strong> y nos llevamos todos los restos.
          </>
        }
        img={emergencia}
        alt="Árbol arrancado de raíz por el viento"
        mensaje={`Hola, tengo un árbol caído o a punto de caer${en} y necesito que lo veáis cuanto antes.`}
      />

      <Card
        title={`Palmeras secas o con picudo rojo${en}`}
        info={
          <>
            Una palmera seca o con el cogollo caído es un peligro: la copa puede desprenderse de golpe, y en una palmera de 10 o 15 metros eso son muchos kilos cayendo.
            <br />
            <br />
            La talamos por partes, desde arriba o con plataforma según el acceso, y <strong>retiramos todos los restos con cuidado</strong> para no extender el picudo a las palmeras de alrededor.
          </>
        }
        img={grua}
        alt="Trabajo en altura en una palmera desde una plataforma elevadora"
        mensaje={`Hola, quiero pedir presupuesto para talar una palmera seca o con picudo${en}.`}
      />
    </div>
  );
}

export default SeoCards;
