"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import recogidaresiduos from '../../../assets/img/recogida-residuos.jpg';

import podaseguridad from '../../../assets/img/poda-seguridad.jpg';
import ayuntamiento from '../../../assets/img/ayuntamiento.jpg';
import tocones from '../../../assets/img/tocones.jpg';
import podaseo from '../../../assets/img/podaseo.jpg';
import plameraseo from '../../../assets/img/palmerasseo.jpg';
import pulpo from '../../../assets/img/pulpo.jpg';


function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios"> 

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Poda de árboles en ${municipio}`}
        description="Podamos árboles aplicando técnicas precisas y seguras para garantizar su desarrollo óptimo y la seguridad del entorno. Realizamos podas de mantenimiento y saneamiento adaptándonos a las necesidades de cada árbol y espacio. Nuestro equipo experto trabaja asegurando cortes limpios y adecuados que reducen el riesgo de caídas de ramas."
        img={podaseo}
        top="block"
        ></Grid>

        <Grid
        service={`Poda de seguridad ${municipio}`}
        description="Eliminamos ramas peligrosas que puedan caer, garantizando la protección de personas y estructuras con técnicas precisas y seguras adaptadas a cada situación."
        img={podaseguridad}
        top="none"
        ></Grid>

        <Grid
        service={`Recogida y disposición de residuos ${municipio}`}
        description="Gestionamos la recogida y disposición de residuos de jardinería de forma responsable, asegurando que todos los desechos vegetales sean eliminados adecuadamente o reutilizados como compost. Este servicio no solo mantiene tu jardín limpio, sino que también contribuye a la sostenibilidad ambiental."
        img={pulpo}
        top="block"
        ></Grid>

        <Grid
        service={`Poda de palmeras ${municipio}`}
        description="Realizamos desrame de árboles para mejorar su salud y estética, eliminando ramas innecesarias o enfermas de manera segura y eficiente. Este servicio ayuda a prevenir daños futuros y mejora la estructura general del árbol."
        img={plameraseo}
        top="none"
        ></Grid>

        <Grid
        service={`Trámites con ayuntamientos ${municipio}`}
        description="Nos ocupamos de gestionar los permisos necesarios con el ayuntamiento para podas o talas, asegurándole un proceso sencillo y cumpliendo con todas las normativas locales en Valencia y alrededores."
        img={ayuntamiento}
        top="none"
        ></Grid>

        </div>




        <h3 className="second_h2">Hacemos que tus árboles se vean increíbles</h3>
        <p className="second_p">El cuidado de los árboles requiere conocimientos especializados y una ejecución precisa. Por ello, nos encargamos de realizar podas que promuevan la salud de los árboles y minimicen cualquier riesgo en su jardín. Cuando la situación lo exige, <strong>también llevamos a cabo talas controladas con técnicas avanzadas</strong>, asegurándonos de proteger tanto las personas como las estructuras cercanas. Nuestro objetivo es proporcionarle un servicio integral que abarque desde el análisis inicial hasta la limpieza final del área, dejándola en perfectas condiciones tras nuestra intervención.
        <br></br><br></br>
        Uno de nuestros servicios más destacados es la <strong>poda en altura, diseñada para árboles de gran tamaño</strong> que presentan retos específicos. Gracias a equipos como plataformas elevadoras y grúas, accedemos a las zonas más altas con total seguridad, ejecutando cada corte con precisión para preservar la integridad del árbol y garantizar la tranquilidad de quienes nos contratan. Esta especialización nos permite atender desde pequeños jardines hasta grandes extensiones, adaptándonos a las particularidades de cada espacio con el mismo nivel de profesionalidad.</p>
                




</div>

    );


}

export default GridMaster; 