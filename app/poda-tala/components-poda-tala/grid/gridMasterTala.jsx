"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from '../../../components/grid/grid'; // la misma tarjeta de la home, con el WhatsApp de cada servicio

// IMAGENES
import podatala from '../../../assets/img/poda-tala.jpg';
import talapino from '../../../assets/img/licencia.jpg';
import grua from '../../../assets/img/grua.jpg';
import arbolcaido from '../../../assets/img/arbolcaio.jpg';
import tocones from '../../../assets/img/tocones.jpg';
import ayuntamiento from '../../../assets/img/ayuntamiento.jpg';
import desbrozado from '../../../assets/img/desbrozado.jpg';
import troncos from '../../../assets/img/troncos.jpg';



function GridMaster({municipio}){

    // Mensaje de WhatsApp de cada servicio, con el pueblo («en Bétera»), como en la home
    const msg = (texto) => `Hola, ${texto}${municipio ? ' ' + municipio : ''}.`;

    return(
    <>

    {/* Presentación: antes iba en la portada; ahora va tras las reseñas, como en la home */}
    <h2 className="second_h2">Tala segura de árboles y palmeras</h2>
    <p className="second_p">Talar un pino de 20 metros en mitad de un campo es sencillo. Hacerlo a un metro de una fachada, con la piscina debajo y cables al lado, no lo es. Por eso, cuando no hay sitio para tumbar el árbol, <strong>lo desmontamos por partes desde arriba</strong> y bajamos cada trozo de forma controlada. Talamos <strong>pinos, palmeras, chopos, eucaliptos y árboles secos o enfermos</strong> {municipio} y alrededores, nos ocupamos del permiso si hace falta y nos llevamos todo, o te dejamos la leña troceada si la quieres.</p>

    <div className="gridmaster" id="servicios">

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala por partes junto a viviendas ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para talar por partes un árbol pegado a la casa')}
        description="Si no hay sitio para tumbar el árbol, lo desmontamos desde arriba, tramo a tramo, y bajamos cada trozo de forma controlada. Ni el tejado ni la piscina se enteran."
        img={podatala}
        top="block"
        ></Grid>

        <Grid
        service={`Tala de pinos grandes o inclinados ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para talar un pino grande o inclinado')}
        description="Pinos de 15 o 20 metros, inclinados hacia la casa o con el tronco dañado. Valoramos el riesgo, decidimos por dónde cortar y talamos sin dejar nada a medias."
        img={talapino}
        top="none"
        ></Grid>

        <Grid
        service={`Tala de palmeras secas o con picudo ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para talar una palmera seca o con picudo')}
        description="Una palmera seca o con el cogollo caído puede venirse abajo. La talamos por partes y retiramos todos los restos con cuidado para no extender el picudo rojo."
        img={grua}
        top="none"
        ></Grid>

        <Grid
        service={`Tala urgente por riesgo de caída ${municipio}`}
        mensaje={msg('tengo un árbol peligroso y necesito que lo veáis cuanto antes')}
        description="Árboles caídos tras un temporal, apoyados en otro árbol o a punto de partirse. Estos avisos los atendemos los primeros."
        img={arbolcaido}
        top="none"
        ></Grid>

        <Grid
        service={`Destoconado ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para quitar un tocón')}
        description="Después de la tala podemos quitar también el tocón con destoconadora, para que no rebrote y puedas aprovechar ese espacio."
        img={tocones}
        top="none"
        ></Grid>

        <Grid
        service={`Permiso de tala del ayuntamiento ${municipio}`}
        mensaje={msg('necesito talar un árbol y quiero que os ocupéis del permiso del ayuntamiento')}
        description="Te decimos si tu ayuntamiento exige permiso para talar ese árbol y nos ocupamos del trámite de principio a fin."
        img={ayuntamiento}
        top="none"
        ></Grid>

        <Grid
        service={`Triturado y retirada de restos ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para triturar y retirar los restos de una tala')}
        description="Trituramos las ramas o las cargamos en el camión, y nos llevamos troncos y restos a un gestor autorizado. Al terminar barremos la zona."
        img={desbrozado}
        top="none"
        ></Grid>

        <Grid
        service={`Leña troceada ${municipio}`}
        mensaje={msg('quiero aprovechar la madera del árbol como leña para la chimenea')}
        description="Si quieres aprovechar el árbol, te dejamos la madera cortada a medida para la chimenea y apilada donde nos digas."
        img={troncos}
        top="none"
        ></Grid>

        </div>




        <h3 className="second_h2">Antes de talar, lo vemos de cerca</h3>
        <p className="second_p">No todos los árboles que dan miedo hay que talarlos. A veces basta con una <strong>poda de reducción</strong> o con quitar dos ramas que cargan hacia la casa. Por eso, antes de darte un precio, vemos el árbol y te decimos lo que haríamos nosotros si fuera nuestro.
        <br></br><br></br>
        Cuando sí hay que talar, <strong>acotamos la zona, trabajamos con seguro de responsabilidad civil</strong> y elegimos la técnica según el sitio: tumbar el árbol si hay espacio, o desmontarlo por partes si está cerca de la casa, de una piscina o de cables. Y al acabar, no queda ni una rama en el suelo.</p>





</div>
    </>

    );


}

export default GridMaster;
