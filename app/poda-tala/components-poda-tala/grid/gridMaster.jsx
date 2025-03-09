"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import podatala from '../../../assets/img/poda-tala.jpg';
import disenojardines from '../../../assets/img/diseno-jardines.jpg';
import paisajismo from '../../../assets/img/paisajismo.jpg';
import desrame from '../../../assets/img/desrame.jpg';
import recogidaresiduos from '../../../assets/img/recogida-residuos.jpg';
import parcelas from '../../../assets/img/parcelas.jpg';

import mantcesped from '../../../assets/img/mant-cesped.jpg';
import mantcomunidades from '../../../assets/img/mant-comunidades.jpg';
import mantareasverdes from '../../../assets/img/mant-areasverdes.jpg';

import instalariego from '../../../assets/img/instala-riego.jpg';
import instalaluz from '../../../assets/img/instala-luz.jpg';
import instalacercas from '../../../assets/img/instala-cercas.jpg';

import tocones from '../../../assets/img/tocones.jpg';
import podaseguridad from '../../../assets/img/poda-seguridad.jpg';
import ornamental from '../../../assets/img/ornamental.jpg';
import troncos from '../../../assets/img/troncos.jpg';
import plagas from '../../../assets/img/plagas.jpg';
import ayuntamiento from '../../../assets/img/ayuntamiento.jpg';



function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios"> 

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Poda y tala en altura ${municipio}`}
        description="Nos especializamos en poda y tala en altura, empleando técnicas seguras para gestionar árboles grandes y en ubicaciones complicadas. Este servicio previene riesgos y promueve la salud y el buen crecimiento de tus árboles."
        img={podatala}
        top="block"
        ></Grid>

        <Grid
        service={`Retirada de tocones con máquina ${municipio}`}
        description="Elimina tocones de forma rápida, segura y sin destrozar tu terreno con nuestra maquinaria especializada. Olvídate de excavaciones y esfuerzos innecesarios: evita rebrotes, plagas y gana espacio para nuevas plantaciones o construcciones."
        img={tocones}
        top="block"
        ></Grid>

        <Grid
        service={`Poda de seguridad ${municipio}`}
        description="Eliminamos ramas peligrosas que puedan caer, garantizando la protección de personas y estructuras con técnicas precisas y seguras adaptadas a cada situación."
        img={podaseguridad}
        top="none"
        ></Grid>

        <Grid
        service={`Poda ornamental ${municipio}`}
        description="Damos forma a árboles y setos para embellecer su jardín, cuidando cada corte para lograr un diseño estético y funcional que resalte su espacio verde. También hacemos diseños de jardín."
        img={ornamental}
        top="none"
        ></Grid>

        <Grid
        service={`Recogida y disposición de residuos ${municipio}`}
        description="Gestionamos la recogida y disposición de residuos de jardinería de forma responsable, asegurando que todos los desechos vegetales sean eliminados adecuadamente o reutilizados como compost. Este servicio no solo mantiene tu jardín limpio, sino que también contribuye a la sostenibilidad ambiental."
        img={recogidaresiduos}
        top="block"
        ></Grid>

        <Grid
        service={`Poda y tala de palmeras ${municipio}`}
        description="Realizamos desrame de árboles para mejorar su salud y estética, eliminando ramas innecesarias o enfermas de manera segura y eficiente. Este servicio ayuda a prevenir daños futuros y mejora la estructura general del árbol."
        img={desrame}
        top="none"
        ></Grid>

        <Grid
        service={`Elaboración de leña ${municipio}`}
        description="Aprovechamos la madera de la tala o poda, cortándola a medida para convertirla en leña útil, ofreciendo un servicio adicional práctico y sostenible según sus necesidades específicas."
        img={troncos}
        top="none"
        ></Grid>

        <Grid
        service={`Trámites con ayuntamientos ${municipio}`}
        description="Nos ocupamos de gestionar los permisos necesarios con el ayuntamiento para podas o talas, asegurándole un proceso sencillo y cumpliendo con todas las normativas locales en Valencia y alrededores."
        img={ayuntamiento}
        top="none"
        ></Grid>

        <Grid
        service={`Control de plagas ${municipio}`}
        description="Identificamos y tratamos plagas o enfermedades en árboles y palmeras, aplicando soluciones efectivas para proteger su salud y la de su jardín con un enfoque profesional y sostenible."
        img={plagas}
        top="none"
        ></Grid>

        </div>




        <h2 className="second_h2">Ofrecemos servicios a particulares, empresas, comunidades y ayuntamientos</h2>
        <p className="second_p">El mantenimiento adecuado de los árboles es esencial <strong>para garantizar la seguridad</strong> y el buen estado de los espacios verdes, ya sean jardines privados, comunidades o zonas públicas. Nuestra empresa, con más de 20 años de experiencia, se especializa en ofrecer servicios de poda y tala de árboles en altura <strong>adaptándonos a las necesidades de cada cliente</strong> y de su espacio. Nos comprometemos a dar <strong>soluciones eficientes y seguras</strong>, que respaldamos con un equipo cualificado y el uso de herramientas modernas, para que pueda confiar plenamente en nosotros.</p>
        




</div>

    );


}

export default GridMaster; 