"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from '../../../components/grid/grid'; // la misma tarjeta de la home, con el WhatsApp de cada servicio

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

    // Mensaje de WhatsApp de cada servicio, con el pueblo («en Bétera»), como en la home
    const msg = (texto) => `Hola, ${texto}${municipio ? ' ' + municipio : ''}.`;

    return(
    <>

    {/* Presentación: antes iba en la portada; ahora va tras las reseñas, como en la home */}
    <h2 className="second_h2">Para particulares, comunidades, empresas y ayuntamientos</h2>
    <p className="second_p">Hay árboles que se pueden podar desde el suelo y árboles que no. Nosotros nos dedicamos a los segundos: <strong>pinos, palmeras y árboles de gran porte</strong>, muchas veces pegados a una casa, a una piscina o a un cable, donde cada corte hay que pensarlo antes. Llevamos más de 20 años haciéndolo en Valencia y alrededores, para particulares, comunidades, empresas y ayuntamientos como los de La Eliana y Llíria. <strong>Te explicamos qué necesita el árbol</strong>, te damos el precio antes de empezar y no nos vamos hasta dejarlo todo recogido.</p>

    <div className="gridmaster" id="servicios">

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala por partes junto a viviendas ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para talar por partes un árbol pegado a la casa')}
        description="Cuando el árbol no se puede tumbar entero, lo desmontamos desde arriba, tramo a tramo, y bajamos cada trozo de forma controlada. Así talamos sin tocar tejados, piscinas, vallas ni cables."
        img={podatala}
        top="block"
        ></Grid>

        <Grid
        service={`Poda en altura ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para podar un árbol alto')}
        description="Quitamos ramas secas, rotas o que cargan hacia la casa y aligeramos la copa para que el árbol aguante mejor el viento."
        img={podaseguridad}
        top="none"
        ></Grid>

        <Grid
        service={`Poda y tala de palmeras ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para podar o talar una palmera')}
        description="Limpieza de hojas secas y racimos, y tala de palmeras secas o afectadas por el picudo rojo, de cualquier altura. Nos llevamos todas las hojas, que abultan muchísimo."
        img={palmeras}
        top="none"
        ></Grid>

        <Grid
        service={`Tala urgente de árboles peligrosos ${municipio}`}
        mensaje={msg('tengo un árbol peligroso y necesito que lo veáis cuanto antes')}
        description="Pinos inclinados, árboles apoyados en otro o caídos tras un temporal. Cuando hay riesgo para la casa o para las personas, el aviso pasa por delante."
        img={arbolcaido}
        top="none"
        ></Grid>

        <Grid
        service={`Destoconado con máquina ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para quitar un tocón')}
        description="Molemos el tocón con destoconadora para que no rebrote y puedas aprovechar ese espacio, sin hacer un agujero en el jardín."
        img={tocones}
        top="none"
        ></Grid>

        <Grid
        service={`Retirada de restos ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para retirar los restos de una poda o una tala')}
        description="Cargamos troncos y ramas y nos lo llevamos todo a un gestor autorizado. El jardín queda barrido y, si ha caído algo fuera, la calle también."
        img={pulpo}
        top="none"
        ></Grid>

        <Grid
        service={`Leña troceada ${municipio}`}
        mensaje={msg('quiero aprovechar la madera del árbol como leña para la chimenea')}
        description="Si quieres la madera para la chimenea, te la dejamos cortada a medida y apilada donde nos digas."
        img={troncos}
        top="none"
        ></Grid>

        <Grid
        service={`Permisos con el ayuntamiento ${municipio}`}
        mensaje={msg('necesito talar un árbol y quiero que os ocupéis del permiso del ayuntamiento')}
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
    </>

    );


}

export default GridMaster;
