"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
// Fotos reales del equipo actual (carpeta fotos-2). Palmeras: aún no hay foto propia.
import talapino from '../../assets/img/tala-pino-por-partes-gartalia.jpg';
import podaaltura from '../../assets/img/poda-pino-altura-gartalia.jpg';
import palmeras from '../../assets/img/palmeras-altas-gartalia.jpg'; // IMG_9491, sin personas (elegida por el usuario)
import arbolcaido from '../../assets/img/pino-peligroso-gartalia.jpg';
import tocones from '../../assets/img/tocones.jpg';
import ayuntamiento from '../../assets/img/ayuntamiento.jpg';
import parcelas from '../../assets/img/desbroce-parcela.jpg'; // la misma de la tarjeta de parcelas de abajo (Pexels 15211861)
import abandonadas from '../../assets/img/recogida-residuos.jpg';
import triturado from '../../assets/img/desbrozado.jpg';



function GridMaster({municipio}){

    // Mensaje de WhatsApp de cada servicio; en las páginas de pueblo añade «en Bétera», etc.
    const msg = (texto) => `Hola, ${texto}${municipio ? ' ' + municipio : ''}.`;

    return(

    <div className="gridmaster" id="servicios">

        <h2>Poda y tala en altura</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala de pinos y árboles grandes ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para talar un pino o un árbol grande')}
        description="Pinos de 15 o 20 metros, inclinados o con riesgo de caer. Si el árbol está pegado a la casa, lo bajamos por partes, controlando dónde cae cada trozo, y al terminar no queda ni una rama en el suelo."
        img={talapino}
        alt="Tres operarios de Gartalia con casco guiando un trozo de tronco de pino mientras lo bajan"
        top="block"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Poda en altura ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para podar un árbol alto')}
        description="Subimos a la copa para quitar ramas secas, aligerar peso y dejar el árbol equilibrado y sano. Así evitas que una rama acabe sobre el tejado, la piscina o el coche del vecino."
        img={podaaltura}
        alt="Trepador de Gartalia con casco trabajando en la horquilla de un pino alto"
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Poda y tala de palmeras ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para podar o talar una palmera')}
        description="Limpiamos hojas secas y racimos de palmeras de cualquier altura. Si una palmera está seca o tocada por el picudo rojo, la talamos y la retiramos antes de que sea un peligro."
        img={palmeras}
        alt="Copas de palmeras altas vistas desde abajo"
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Árboles peligrosos y urgencias ${municipio}`}
        mensaje={msg('tengo un árbol peligroso y necesito que lo veáis cuanto antes')}
        description="Árboles caídos tras un temporal, pinos apoyados en otro árbol o ramas a punto de partirse sobre la casa. Estos avisos los atendemos los primeros."
        img={arbolcaido}
        alt="Trepador de Gartalia colgado de cuerdas junto a un pino grande de tronco curvado"
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Destoconado ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para quitar un tocón')}
        description="Quitamos el tocón para que no rebrote y puedas plantar, poner césped o construir en ese mismo sitio."
        img={tocones}
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Permiso de tala del ayuntamiento ${municipio}`}
        servicio={`informe técnico para el permiso de tala ${municipio}`}
        mensaje={msg('quiero que me preparéis el informe técnico para pedir permiso de tala')}
        description="Para talar un árbol, muchos ayuntamientos piden un permiso. Si la solicitud llega incompleta, se queda parada o te piden más papeles. Por eso te preparamos el informe técnico del árbol: especie, tamaño, estado y motivo de la tala. Así el ayuntamiento tiene todo lo que necesita desde el primer día y el trámite va mucho más rápido."
        img={ayuntamiento}
        top="none"
        link="/poda-tala"
        ></Grid>

        </div>




        <h2 id="parcelas">Limpieza de parcelas</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Desbroce de parcelas ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para desbrozar una parcela')}
        description="Quitamos maleza, cañas y matorral de parcelas de cualquier tamaño y nos llevamos todo lo cortado. Mejor antes del verano, que es cuando los ayuntamientos exigen tenerlas limpias."
        img={parcelas}
        alt="Operario desbrozando hierba alta en una parcela con una desbrozadora"
        top="none"
        ></Grid>

        <Grid
        service={`Parcelas y jardines abandonados ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para limpiar una parcela o un jardín abandonado')}
        description="Terrenos que llevan años sin tocarse, con árboles secos, zarzas y restos. Los dejamos despejados y listos para vender, construir o volver a disfrutarlos."
        img={abandonadas}
        top="none"
        ></Grid>

        <Grid
        service={`Triturado y retirada de restos ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para triturar y retirar restos de poda')}
        description="Trituramos las ramas en la misma parcela o las cargamos en el camión y las llevamos a un gestor autorizado. No dejamos montones esperando a que alguien los recoja."
        img={triturado}
        top="none"
        ></Grid>

        </div>

</div>

    );


}

export default GridMaster;
