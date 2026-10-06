"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import podapinos from '../../../assets/img/podaseo.jpg';
import palmeras from '../../../assets/img/palmerasseo.jpg';
import podaseguridad from '../../../assets/img/poda-seguridad.jpg';
import pulpo from '../../../assets/img/pulpo.jpg';
import troncos from '../../../assets/img/troncos.jpg';


function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios">

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Poda de pinos ${municipio}`}
        description="Quitamos las ramas secas y las que vuelan sobre la casa, la piscina o la parcela del vecino, y aligeramos la copa para que el pino aguante mejor el viento."
        img={podapinos}
        top="block"
        ></Grid>

        <Grid
        service={`Poda de palmeras ${municipio}`}
        description="Limpiamos hojas secas y racimos a cualquier altura y, de paso, revisamos si la palmera tiene síntomas de picudo rojo. Nos llevamos todas las hojas."
        img={palmeras}
        top="none"
        ></Grid>

        <Grid
        service={`Poda de seguridad ${municipio}`}
        description="Ramas rotas, secas o colgando sobre zonas de paso. Las quitamos antes de que caigan solas, con la zona acotada y bajando cada rama de forma controlada."
        img={podaseguridad}
        top="none"
        ></Grid>

        <Grid
        service={`Recogida de todos los restos ${municipio}`}
        description="Las ramas no se quedan amontonadas en la entrada: las cargamos y las llevamos a un gestor autorizado. Al terminar barremos el jardín."
        img={pulpo}
        top="none"
        ></Grid>

        <Grid
        service={`Leña troceada ${municipio}`}
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

    );


}

export default GridMaster;
