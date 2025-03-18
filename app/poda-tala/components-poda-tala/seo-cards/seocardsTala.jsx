"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import palmeras from '../../../assets/img/diseno-jardines.jpg';
import emergencia from '../../../assets/img/emergencia.jpg';
import grua from '../../../assets/img/grua.jpg';


function SeoCards({ municipio }) {
  return (
    <div className="seoCards">
      <Card
        title={`¿Cuándo es necesaria la tala de árboles en tu jardín ${municipio}?`}
        info={
          <>
            La tala de árboles en jardines o espacios verdes es una solución necesaria cuando se presentan situaciones de peligro, árboles enfermos o secos, o cuando las raíces están afectando estructuras cercanas. Un servicio de tala profesional garantiza la seguridad de tu hogar, previniendo daños potenciales provocados por caídas imprevistas. Nuestro equipo especializado evalúa cada situación, aplicando técnicas específicas para realizar una tala segura y rápida. Desde algarrobos hasta pinos, gestionamos cuidadosamente cada intervención, retirando por completo los residuos generados y dejando tu espacio seguro y ordenado.
          </>
        }
        img={palmeras}
        alt="Espectacular jardín con palmeras diseñado por Gartalia en El Oasis Resort"
      ></Card>

      <Card
        title={`Árbol caído en la carretera ${municipio}: ¿qué hacer ante situaciones de peligro? `}
        info={
          <>
            Un árbol caído en una carretera o camino representa un serio riesgo tanto para personas como para vehículos. En estos casos, la intervención rápida mediante la tala de emergencia es crucial para restablecer la seguridad y normalizar el tráfico cuanto antes. Contamos con un equipo especializado en talas urgentes que responde rápidamente a este tipo de situaciones. Realizamos una retirada segura del árbol, despejamos la zona afectada y gestionamos los restos vegetales generados, evitando así futuros riesgos para conductores y peatones en Bétera y otras localidades valencianas.
          </>
        }
        img={emergencia}
        alt="Árbol caído en la carretera que va desde Bétera a Náquera en la primavera de 2024"
      ></Card>

      <Card
        title={`¿Por qué es importante talar palmeras afectadas o secas ${municipio}?`}
        info={
          <>
            Las palmeras afectadas por plagas, enfermedades o simplemente secas pueden convertirse en un riesgo serio de caídas o daños materiales, especialmente en climas mediterráneos como Valencia. La tala controlada y profesional de palmeras garantiza la seguridad del entorno, evitando situaciones de peligro para las personas o estructuras cercanas. Nuestro equipo utiliza técnicas específicas para la tala segura y eficiente de palmeras, realizando una completa retirada de los residuos generados para dejar el espacio limpio y seguro. Protege tu entorno evitando accidentes derivados de palmeras deterioradas con nuestro servicio especializado.
          </>
        }
        img={grua}
        alt="Trabajador de Gartalia subido en una grua talando una palmera en campo de golf Escorpión"
      ></Card>
    </div>
  );
}

export default SeoCards;