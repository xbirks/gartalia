"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from '../../../components/grid/grid'; // la misma tarjeta de la home, con el WhatsApp de cada servicio

// IMAGENES
import podapinos from '../../../assets/img/podaseo.jpg';
import palmeras from '../../../assets/img/palmerasseo.jpg';
import podaseguridad from '../../../assets/img/poda-seguridad.jpg';
import pulpo from '../../../assets/img/pulpo.jpg';
import troncos from '../../../assets/img/troncos.jpg';


function GridMaster({municipio}){

    // Mensaje de WhatsApp de cada servicio, con el pueblo («en Bétera»), como en la home
    const msg = (texto) => `Hola, ${texto}${municipio ? ' ' + municipio : ''}.`;

    return(
    <>

    {/* Presentación: antes iba en la portada; ahora va tras las reseñas, como en la home */}
    <h2 className="second_h2">Poda de árboles para particulares, comunidades y empresas</h2>
    <p className="second_p">Una buena poda en altura no consiste en cortar mucho, sino en cortar bien: quitar las ramas secas o que cargan hacia la casa, aligerar el peso de la copa y dejar el árbol equilibrado para que aguante el viento. Lo hacemos en <strong>pinos, palmeras, olivos, algarrobos, cipreses y chopos</strong>, que es lo que más encontramos {municipio} y alrededores. <strong>Subimos con arnés o con plataforma</strong>, según el árbol y el acceso, y al terminar retiramos todas las ramas.</p>

    <div className="gridmaster" id="servicios">

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Poda de pinos ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para podar un pino')}
        description="Quitamos las ramas secas y las que vuelan sobre la casa, la piscina o la parcela del vecino, y aligeramos la copa para que el pino aguante mejor el viento."
        img={podapinos}
        top="block"
        ></Grid>

        <Grid
        service={`Poda de palmeras ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para podar una palmera')}
        description="Limpiamos hojas secas y racimos a cualquier altura y, de paso, revisamos si la palmera tiene síntomas de picudo rojo. Nos llevamos todas las hojas."
        img={palmeras}
        top="none"
        ></Grid>

        <Grid
        service={`Poda de seguridad ${municipio}`}
        mensaje={msg('tengo ramas secas o peligrosas y quiero que las quitéis')}
        description="Ramas rotas, secas o colgando sobre zonas de paso. Las quitamos antes de que caigan solas, con la zona acotada y bajando cada rama de forma controlada."
        img={podaseguridad}
        top="none"
        ></Grid>

        <Grid
        service={`Recogida de todos los restos ${municipio}`}
        mensaje={msg('quiero pedir presupuesto para una poda con recogida de todos los restos')}
        description="Las ramas no se quedan amontonadas en la entrada: las cargamos y las llevamos a un gestor autorizado. Al terminar barremos el jardín."
        img={pulpo}
        top="none"
        ></Grid>

        <Grid
        service={`Leña troceada ${municipio}`}
        mensaje={msg('quiero aprovechar la madera del árbol como leña para la chimenea')}
        description="Si la poda deja madera aprovechable, te la cortamos a medida para la chimenea y te la apilamos donde nos digas."
        img={troncos}
        top="none"
        ></Grid>

        </div>




        <h3 className="second_h2">Cuándo conviene podar</h3>
        <p className="second_p">Los <strong>pinos</strong> se podan mejor en los meses fríos, de finales de otoño a finales de invierno, cuando el árbol está en reposo. Las <strong>palmeras</strong>, también en invierno: el picudo rojo está menos activo y los cortes le atraen menos. Los árboles de hoja caduca, cuando han perdido la hoja.
        <br></br><br></br>
        La excepción son las <strong>ramas peligrosas</strong>: una rama seca encima del tejado o de la zona de juegos de los niños no tiene que esperar a ninguna época. Si nos mandas una foto, te decimos si es urgente o si puede esperar a la temporada buena.</p>





</div>
    </>

    );


}

export default GridMaster;
