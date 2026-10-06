"use client";

import Image from 'next/image';
import Link from 'next/link';
import './other.scss';
import Grid from '../grid/grid';

//IMG
import procesionaria from '../../assets/img/podaseo.jpg';
import lena from '../../assets/img/troncos.jpg';
import comunidades from '../../assets/img/podahotel.jpg';

function Other({municipio}){

    return(
        <div className="gridmaster other">

            <h2>También nos encargamos de</h2>

            <div className="gridmaster__elements">

            <Grid
            service={`Bolsones de procesionaria ${municipio}`}
            description="Quitamos los bolsones de procesionaria de los pinos, también los que están en lo más alto, antes de que bajen las orugas. Importante si en casa hay niños o perros."
            img={procesionaria}
            top="none"
            ></Grid>

            <Grid
            service={`Leña troceada para la chimenea ${municipio}`}
            description="Si quieres aprovechar la madera del árbol, te la dejamos cortada a medida para la chimenea y apilada donde nos digas."
            img={lena}
            top="none"
            ></Grid>

            <Grid
            service={`Comunidades, urbanizaciones y empresas ${municipio}`}
            description="Podamos y talamos el arbolado de zonas comunes, hoteles y clubes, con presupuesto por escrito y el trabajo organizado para molestar lo mínimo a vecinos y clientes."
            img={comunidades}
            top="none"
            ></Grid>

            </div>
        </div>
    );

}

export default Other;
