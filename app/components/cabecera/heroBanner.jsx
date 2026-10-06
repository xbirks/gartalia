"use client";

import Image from 'next/image';
import "./intro.scss";
import certificados from '../../assets/img/icon_certificados.svg';
// Sin enlace a Google aquí: más abajo están las reseñas, y no conviene sacar a nadie de la página tan pronto.
import { NOTA, TOTAL_OPINIONES } from '../../lib/resenas';


function HeroBanner(){

    return(

        <div className="hero__master">
            <div className="hero__element hero__1">
                <p>+20</p>
                <p>años de<br></br>experiencia</p>
            </div>
            <div className="hero__element hero__2">
                <Image src={certificados} alt="Icono de profesionales certificados"></Image>
                <p>Profesionales<br></br>certificados</p>
            </div>
            <div className="hero__element hero__3">
                <p>{NOTA}</p>
                <p>estrellas en<br></br>Google, con<br></br>{TOTAL_OPINIONES} opiniones</p>
            </div>
            <div className="hero__element hero__4">
                <p>100%</p>
                <p>limpio al<br></br>terminar</p>
            </div>
            <div className="hero__element hero__5">
                <p>ECO</p>
                <p>comprometidos<br></br>con el medio<br></br>ambiente</p>
            </div>
        </div>

    )

};

export default HeroBanner;
