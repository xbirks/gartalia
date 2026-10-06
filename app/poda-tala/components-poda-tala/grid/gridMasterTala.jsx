"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

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

    return(

    <div className="gridmaster" id="servicios">

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala por partes junto a viviendas ${municipio}`}
        description="Si no hay sitio para tumbar el árbol, lo desmontamos desde arriba, tramo a tramo, y bajamos cada trozo de forma controlada. Ni el tejado ni la piscina se enteran."
        img={podatala}
        top="block"
        ></Grid>

        <Grid
        service={`Tala de pinos grandes o inclinados ${municipio}`}
        description="Pinos de 15 o 20 metros, inclinados hacia la casa o con el tronco dañado. Valoramos el riesgo, decidimos por dónde cortar y talamos sin dejar nada a medias."
        img={talapino}
        top="none"
        ></Grid>

        <Grid
        service={`Tala de palmeras secas o con picudo ${municipio}`}
        description="Una palmera seca o con el cogollo caído puede venirse abajo. La talamos por partes y retiramos todos los restos con cuidado para no extender el picudo rojo."
        img={grua}
        top="none"
        ></Grid>

        <Grid
        service={`Tala urgente por riesgo de caída ${municipio}`}
        description="Árboles caídos tras un temporal, apoyados en otro árbol o a punto de partirse. Estos avisos los atendemos los primeros."
        img={arbolcaido}
        top="none"
        ></Grid>

        <Grid
        service={`Destoconado ${municipio}`}
        description="Después de la tala podemos quitar también el tocón con destoconadora, para que no rebrote y puedas aprovechar ese espacio."
        img={tocones}
        top="none"
        ></Grid>

        <Grid
        service={`Permiso de tala del ayuntamiento ${municipio}`}
        description="Te decimos si tu ayuntamiento exige permiso para talar ese árbol y nos ocupamos del trámite de principio a fin."
        img={ayuntamiento}
        top="none"
        ></Grid>

        <Grid
        service={`Triturado y retirada de restos ${municipio}`}
        description="Trituramos las ramas o las cargamos en el camión, y nos llevamos troncos y restos a un gestor autorizado. Al terminar barremos la zona."
        img={desbrozado}
        top="none"
        ></Grid>

        <Grid
        service={`Leña troceada ${municipio}`}
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

    );


}

export default GridMaster;
