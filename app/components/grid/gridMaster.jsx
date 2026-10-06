"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import talapino from '../../assets/img/licencia.jpg';
import podaaltura from '../../assets/img/poda-seguridad.jpg';
import palmeras from '../../assets/img/palmerasseo.jpg';
import arbolcaido from '../../assets/img/arbolcaio.jpg';
import tocones from '../../assets/img/tocones.jpg';
import ayuntamiento from '../../assets/img/ayuntamiento.jpg';
import parcelas from '../../assets/img/parcelas.jpg';
import abandonadas from '../../assets/img/recogida-residuos.jpg';
import triturado from '../../assets/img/desbrozado.jpg';



function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios">

        <h2>Poda y tala en altura</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Tala de pinos y árboles grandes ${municipio}`}
        description="Pinos de 15 o 20 metros, inclinados o con riesgo de caer. Si el árbol está pegado a la casa, lo bajamos por partes, controlando dónde cae cada trozo, y al terminar no queda ni una rama en el suelo."
        img={talapino}
        top="block"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Poda en altura ${municipio}`}
        description="Subimos a la copa para quitar ramas secas, aligerar peso y dejar el árbol equilibrado y sano. Así evitas que una rama acabe sobre el tejado, la piscina o el coche del vecino."
        img={podaaltura}
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Poda y tala de palmeras ${municipio}`}
        description="Limpiamos hojas secas y racimos de palmeras de cualquier altura. Si una palmera está seca o tocada por el picudo rojo, la talamos y la retiramos antes de que sea un peligro."
        img={palmeras}
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Árboles peligrosos y urgencias ${municipio}`}
        description="Árboles caídos tras un temporal, pinos apoyados en otro árbol o ramas a punto de partirse sobre la casa. Estos avisos los atendemos los primeros."
        img={arbolcaido}
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Destoconado con máquina ${municipio}`}
        description="Quitamos el tocón con destoconadora, sin excavar ni destrozar el jardín. Así no rebrota y puedes plantar, poner césped o construir en ese mismo sitio."
        img={tocones}
        top="none"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Permiso de tala del ayuntamiento ${municipio}`}
        description="En muchos municipios hace falta permiso para talar un árbol. Te decimos si en tu caso lo necesitas y nos encargamos nosotros del papeleo con el ayuntamiento."
        img={ayuntamiento}
        top="none"
        link="/poda-tala"
        ></Grid>

        </div>




        <h2 id="parcelas">Limpieza de parcelas</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Desbroce de parcelas ${municipio}`}
        description="Quitamos maleza, cañas y matorral de parcelas de cualquier tamaño y nos llevamos todo lo cortado. Mejor antes del verano, que es cuando los ayuntamientos exigen tenerlas limpias."
        img={parcelas}
        top="none"
        ></Grid>

        <Grid
        service={`Parcelas y jardines abandonados ${municipio}`}
        description="Terrenos que llevan años sin tocarse, con árboles secos, zarzas y restos. Los dejamos despejados y listos para vender, construir o volver a disfrutarlos."
        img={abandonadas}
        top="none"
        ></Grid>

        <Grid
        service={`Triturado y retirada de restos ${municipio}`}
        description="Trituramos las ramas en la misma parcela o las cargamos en el camión y las llevamos a un gestor autorizado. No dejamos montones esperando a que alguien los recoja."
        img={triturado}
        top="none"
        ></Grid>

        </div>

</div>

    );


}

export default GridMaster;
