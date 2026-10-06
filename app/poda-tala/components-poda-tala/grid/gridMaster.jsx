"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import podatala from '../../../assets/img/poda-tala.jpg';
import podaseguridad from '../../../assets/img/poda-seguridad.jpg';
import palmeras from '../../../assets/img/palmerasseo.jpg';
import arbolcaido from '../../../assets/img/arbolcaio.jpg';
import tocones from '../../../assets/img/tocones.jpg';
import pulpo from '../../../assets/img/pulpo.jpg';
import troncos from '../../../assets/img/troncos.jpg';
import ayuntamiento from '../../../assets/img/ayuntamiento.jpg';



function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios">

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala por partes junto a viviendas ${municipio}`}
        description="Cuando el árbol no se puede tumbar entero, lo desmontamos desde arriba, tramo a tramo, y bajamos cada trozo de forma controlada. Así talamos sin tocar tejados, piscinas, vallas ni cables."
        img={podatala}
        top="block"
        ></Grid>

        <Grid
        service={`Poda en altura ${municipio}`}
        description="Quitamos ramas secas, rotas o que cargan hacia la casa y aligeramos la copa para que el árbol aguante mejor el viento."
        img={podaseguridad}
        top="none"
        ></Grid>

        <Grid
        service={`Poda y tala de palmeras ${municipio}`}
        description="Limpieza de hojas secas y racimos, y tala de palmeras secas o afectadas por el picudo rojo, de cualquier altura. Nos llevamos todas las hojas, que abultan muchísimo."
        img={palmeras}
        top="none"
        ></Grid>

        <Grid
        service={`Tala urgente de árboles peligrosos ${municipio}`}
        description="Pinos inclinados, árboles apoyados en otro o caídos tras un temporal. Cuando hay riesgo para la casa o para las personas, el aviso pasa por delante."
        img={arbolcaido}
        top="none"
        ></Grid>

        <Grid
        service={`Destoconado con máquina ${municipio}`}
        description="Molemos el tocón con destoconadora para que no rebrote y puedas aprovechar ese espacio, sin hacer un agujero en el jardín."
        img={tocones}
        top="none"
        ></Grid>

        <Grid
        service={`Retirada de restos ${municipio}`}
        description="Cargamos troncos y ramas y nos lo llevamos todo a un gestor autorizado. El jardín queda barrido y, si ha caído algo fuera, la calle también."
        img={pulpo}
        top="none"
        ></Grid>

        <Grid
        service={`Leña troceada ${municipio}`}
        description="Si quieres la madera para la chimenea, te la dejamos cortada a medida y apilada donde nos digas."
        img={troncos}
        top="none"
        ></Grid>

        <Grid
        service={`Permisos con el ayuntamiento ${municipio}`}
        description="Te decimos si tu árbol necesita permiso para talarlo y nos ocupamos del trámite, para que no tengas que pelearte con formularios ni ventanillas."
        img={ayuntamiento}
        top="none"
        ></Grid>

        </div>




        <h3 className="second_h2" id="como-trabajamos">Cómo trabajamos</h3>
        <p className="second_p"><strong>1. Vemos el árbol.</strong> Nos mandas fotos por WhatsApp o vamos a verlo, y te explicamos si conviene podar o talar.
        <br></br><br></br>
        <strong>2. Te damos el precio antes de empezar.</strong> Por escrito si lo necesitas, sin compromiso y sin sorpresas el día del trabajo.
        <br></br><br></br>
        <strong>3. Pedimos el permiso si hace falta.</strong> Te decimos si tu ayuntamiento lo exige y nos encargamos del trámite.
        <br></br><br></br>
        <strong>4. Hacemos el trabajo y lo dejamos limpio.</strong> Acotamos la zona, trabajamos con el equipo adecuado y con seguro de responsabilidad civil, y no nos vamos hasta dejarlo todo recogido.</p>





</div>

    );


}

export default GridMaster;
