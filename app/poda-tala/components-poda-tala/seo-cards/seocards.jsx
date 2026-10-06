"use client";

import Image from 'next/image';
import Link from 'next/link';
import Card from '../../../components/seo-cards/card'; // la misma tarjeta de la home (trae sus estilos), con el WhatsApp de cada tema

//IMG
import emergencia from '../../../assets/img/emergencia.jpg';
import pinos from '../../../assets/img/poda-tala.jpg';
import licencia from '../../../assets/img/ayuntamiento.jpg';

function SeoCards({ municipio }) {
  // municipio llega como "en Paterna", o como "en Valencia" en la página principal de poda y tala
  const en = municipio ? ` ${municipio}` : '';

  return (
    <div className="seoCards">
      <Card
        title={`Árboles caídos o a punto de caer${en}`}
        info={
          <>
            Después de un temporal es normal encontrarse un pino tumbado sobre la valla, un árbol apoyado en otro o una rama enorme colgando encima del tejado. <strong>No intentes moverlo tú</strong>: un tronco con tensión puede saltar al cortarlo y hacer mucho daño.
            <br />
            <br />
            Llámanos al 657 170 847 y mándanos fotos. Estos avisos los atendemos antes que el resto de trabajos: aseguramos la zona, cortamos el árbol por partes y nos llevamos todo.
          </>
        }
        img={emergencia}
        alt="Árboles derribados por el viento en una zona de pinar"
        mensaje={`Hola, tengo un árbol caído o a punto de caer${en} y necesito que lo veáis cuanto antes.`}
      />

      <Card
        title={`Pinos que han crecido demasiado cerca de casa${en}`}
        info={
          <>
            Muchos chalets de Valencia y del Camp de Túria tienen pinos plantados hace treinta años que hoy superan los 15 metros y están a un paso de la fachada o de la piscina. Con el viento se mueven, sueltan ramas y las raíces levantan el suelo.
            <br />
            <br />
            No siempre hay que talarlos. A veces basta con una <strong>poda de reducción</strong> para quitar peso y las ramas que cargan hacia la casa. Lo vemos de cerca y te decimos qué haríamos nosotros si fuera nuestro.
          </>
        }
        img={pinos}
        alt="Operario trepando a un pino con arnés para podarlo"
        mensaje={`Hola, tengo un pino muy grande o pegado a la casa${en} y quiero que lo veáis.`}
      />

      <Card
        title={`Permiso para talar un árbol${en}: nos encargamos`}
        info={
          <>
            En muchos municipios hace falta permiso del ayuntamiento para talar un árbol, sobre todo en suelo urbano. En València se pide con el trámite <strong>MA.LC.15</strong>, en el que hay que indicar dónde está el árbol y justificar por qué hay que talarlo.
            <br />
            <br />
            Cada ayuntamiento tiene sus normas y sus plazos. Cuando vamos a ver el árbol te decimos si tu caso necesita permiso y, si quieres, <strong>preparamos y tramitamos nosotros la solicitud</strong>.
          </>
        }
        img={licencia}
        alt="Revisión de la documentación para un permiso de tala"
        mensaje={`Hola, necesito talar un árbol${en} y quiero que os ocupéis del permiso del ayuntamiento.`}
      />
    </div>
  );
}

export default SeoCards;
