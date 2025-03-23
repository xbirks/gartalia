"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import podatala from '../../../assets/img/poda-tala.jpg';
import grua from '../../../assets/img/grua.jpg';
import desrame from '../../../assets/img/desrame.jpg';
import recogidaresiduos from '../../../assets/img/recogida-residuos.jpg';

import desbrozado from '../../../assets/img/desbrozado.jpg';
import podaseguridad from '../../../assets/img/poda-seguridad.jpg';
import ornamental from '../../../assets/img/ornamental.jpg';
import troncos from '../../../assets/img/troncos.jpg';
import plagas from '../../../assets/img/plagas.jpg';
import ayuntamiento from '../../../assets/img/ayuntamiento.jpg';
import tocones from '../../../assets/img/tocones.jpg';
import podaseo from '../../../assets/img/podaseo.jpg';
import hotel from '../../../assets/img/podahotel.jpg';
import plameraseo from '../../../assets/img/palmerasseo.jpg';



function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios"> 

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala controlada de árboles ${municipio}`}
        description="Realizamos talas controladas utilizando técnicas especializadas que garantizan la seguridad del entorno y las personas. Nuestro equipo evalúa cada situación para asegurar una tala precisa y sin riesgos, protegiendo construcciones cercanas y zonas sensibles."
        img={podatala}
        top="block"
        ></Grid>

        <Grid
        service={`Tala con grúas y plataformas elevadoras ${municipio}`}
        description="Llevamos a cabo talas en altura con grúas y plataformas elevadoras, alcanzando árboles de difícil acceso con total seguridad y eficacia. Nuestro equipamiento especializado permite realizar talas rápidas minimizando cualquier riesgo para el entorno."
        img={grua}
        top="none"
        ></Grid>

        <Grid
        service={`Tala especializada en palmeras ${municipio}`}
        description="Ofrecemos talas específicas para palmeras, utilizando técnicas adaptadas a esta especie habitual en la Comunidad Valenciana. Nuestro equipo experto realiza cortes seguros y eficientes para eliminar palmeras deterioradas, enfermas o con peligro de caída."
        img={desrame}
        top="none"
        ></Grid>

        <Grid
        service={`Retirada de palmeras secas ${municipio}`}
        description="Retiramos palmeras secas o afectadas por plagas, evitando riesgos para personas y propiedades. Nuestro servicio especializado se encarga de forma rápida y segura de la eliminación completa de palmeras, gestionando adecuadamente todos los residuos generados."
        img={recogidaresiduos}
        top="block"
        ></Grid>

        <Grid
        service={`Tala urgente por peligro inminente ${municipio}`}
        description="Atendemos situaciones urgentes realizando talas inmediatas cuando exista un riesgo inminente de caída de árboles o palmeras. Nuestra respuesta rápida y profesional garantiza la protección del entorno y la seguridad de las personas."
        img={plameraseo}
        top="none"
        ></Grid>

        <Grid
        service={`Gestión de permisos y trámites municipales ${municipio}`}
        description="Nos encargamos completamente de la gestión de permisos y trámites municipales necesarios para llevar a cabo la tala de árboles y palmeras. Facilitamos todo el proceso administrativo, agilizando los tiempos y evitando complicaciones a nuestros clientes."
        img={ayuntamiento}
        top="none"
        ></Grid>

        <Grid
        service={`Triturado y reciclaje de restos vegetales ${municipio}`}
        description="Ofrecemos servicios de trituración y reciclaje ecológico de restos vegetales tras la tala. Gestionamos responsablemente los residuos generados, convirtiéndolos en material aprovechable y reduciendo el impacto ambiental."
        img={desbrozado}
        top="none"
        ></Grid>

        <Grid
        service={`Destoconado con máquina ${municipio}`}
        description="Elimina tocones de forma rápida, segura y sin destrozar tu terreno con nuestra maquinaria especializada. Olvídate de excavaciones y esfuerzos innecesarios: evita rebrotes, plagas y gana espacio para nuevas plantaciones o construcciones."
        img={tocones}
        top="block"
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